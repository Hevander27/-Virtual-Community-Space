import React, { useState, useEffect, useMemo } from 'react'
import './Events.css'
import EventCard from '../components/EventCard'
import { getAllEvents } from '../services/EventsAPI'
import { getAllLocations } from '../services/LocationsAPI'

// Stretch feature page: shows ALL events across every location, with the
// ability to filter by location.
const Events = () => {
  const [events, setEvents] = useState([])
  const [locations, setLocations] = useState([])
  const [filter, setFilter] = useState('all') // 'all' or a location id (as string)
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
    if (filter === 'all') return events
    return events.filter((event) => String(event.location_id) === filter)
  }, [events, filter])

  return (
    <div className="Events">
      <section className="events-page-header">
        <h2>All Events</h2>
        <p>Every reading, signing, and meetup across the BookNook community.</p>

        <div className="filter-bar">
          <button
            className={`filter-btn ${filter === 'all' ? 'filter-btn--active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All locations
          </button>
          {locations.map((location) => (
            <button
              key={location.id}
              className={`filter-btn ${filter === String(location.id) ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter(String(location.id))}
            >
              {location.name}
            </button>
          ))}
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
          <h3 className="status-message">No events found for this location.</h3>
        )}
      </main>
    </div>
  )
}

export default Events
