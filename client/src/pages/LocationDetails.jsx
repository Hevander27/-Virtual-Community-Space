import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './LocationDetails.css'
import EventCard from '../components/EventCard'
import { getLocationById, getEventsByLocation } from '../services/LocationsAPI'

// Detail page for a single location (unique URL: /locations/:id).
// Lists every event from the events table held at this location.
const LocationDetails = () => {
  const { id } = useParams()
  const [location, setLocation] = useState(null)
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [locationData, eventsData] = await Promise.all([
          getLocationById(id),
          getEventsByLocation(id)
        ])
        setLocation(locationData)
        setEvents(eventsData)
      } catch (error) {
        console.error('Error fetching location details:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  if (loading) {
    return <div className="LocationDetails"><h3 className="status-message">Loading…</h3></div>
  }

  if (!location) {
    return (
      <div className="LocationDetails">
        <h3 className="status-message">Location not found.</h3>
        <Link to="/" className="back-link">← Back to all locations</Link>
      </div>
    )
  }

  return (
    <div className="LocationDetails">
      <Link to="/" className="back-link">← All locations</Link>

      <header
        className="location-hero"
        style={{ backgroundImage: `linear-gradient(rgba(31,42,82,0.55), rgba(31,42,82,0.75)), url(${location.image})` }}
      >
        <div className="location-hero__content">
          <span className="location-hero__badge">{location.neighborhood}</span>
          <h2>{location.name}</h2>
          <p>{location.description}</p>
        </div>
      </header>

      <section className="events-section">
        <h3 className="events-section__heading">
          Events at {location.name} <span>({events.length})</span>
        </h3>

        <div className="events-list">
          {events.length > 0 ? (
            events.map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <p className="status-message">No events scheduled here yet. Check back soon!</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default LocationDetails
