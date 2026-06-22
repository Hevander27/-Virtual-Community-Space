import React, { useState, useEffect, useMemo } from 'react'
import './Events.css'
import EventCard from '../components/EventCard'
import { getAllEvents } from '../services/EventsAPI'
import { getAllLocations } from '../services/LocationsAPI'

const CATEGORIES = ['Book Club', 'Public Reading', 'Book Sale']

// Stretch feature page: shows ALL events across every location, with the
// ability to filter by location and by category (Book Club / Public Reading / Book Sale).
const Events = () => {
  const [events, setEvents] = useState([])
  const [locations, setLocations] = useState([])
  const [locationFilter, setLocationFilter] = useState('all') // 'all' or a location id (string)
  const [categoryFilter, setCategoryFilter] = useState('all') // 'all' or a category name
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsData, locationsData] = await Promise.all([
          getAllEvents(),
          getAllLocations()
        ])
        setEvents(eventsData)
        setLocations(locationsData)
      } catch (error) {
        console.error('Error fetching events:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesLocation =
        locationFilter === 'all' || String(event.location_id) === locationFilter
      const matchesCategory =
        categoryFilter === 'all' || event.category === categoryFilter
      return matchesLocation && matchesCategory
    })
  }, [events, locationFilter, categoryFilter])

  return (
    <div className="Events">
      <section className="events-page-header">
        <h2>All Events</h2>
        <p>Book clubs, public readings, and book sales across the BookNook community.</p>

        <div className="filter-group">
          <span className="filter-group__label">Type</span>
          <div className="filter-bar">
            <button
              className={`filter-btn ${categoryFilter === 'all' ? 'filter-btn--active' : ''}`}
              onClick={() => setCategoryFilter('all')}
            >
              All types
            </button>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`filter-btn ${categoryFilter === category ? 'filter-btn--active' : ''}`}
                onClick={() => setCategoryFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-group__label">Location</span>
          <div className="filter-bar">
            <button
              className={`filter-btn ${locationFilter === 'all' ? 'filter-btn--active' : ''}`}
              onClick={() => setLocationFilter('all')}
            >
              All locations
            </button>
            {locations.map((location) => (
              <button
                key={location.id}
                className={`filter-btn ${locationFilter === String(location.id) ? 'filter-btn--active' : ''}`}
                onClick={() => setLocationFilter(String(location.id))}
              >
                {location.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="events-page-list">
        {loading ? (
          <h3 className="status-message">Loading events…</h3>
        ) : filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} showLocation={true} />
          ))
        ) : (
          <h3 className="status-message">No events match these filters.</h3>
        )}
      </main>
    </div>
  )
}

export default Events
