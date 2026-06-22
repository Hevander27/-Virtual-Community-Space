import React, { useState, useEffect } from 'react'
import './Locations.css'
import LocationCard from '../components/LocationCard'
import { getAllLocations } from '../services/LocationsAPI'

// Home page: a visual grid of locations the user can click to explore events.
const Locations = () => {
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await getAllLocations()
        setLocations(data)
      } catch (error) {
        console.error('Error fetching locations:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchLocations()
  }, [])

  return (
    <div className="Locations">
      <section className="hero">
        <h2 className="hero__title">Find your next chapter</h2>
        <p className="hero__subtitle">
          BookNook is a community for book lovers. Pick a spot below to see the readings,
          signings, clubs, and workshops happening there.
        </p>
      </section>

      <main className="locations-grid">
        {loading ? (
          <h3 className="status-message">Loading locations…</h3>
        ) : locations.length > 0 ? (
          locations.map((location) => (
            <LocationCard
              key={location.id}
              id={location.id}
              name={location.name}
              neighborhood={location.neighborhood}
              image={location.image}
              description={location.description}
            />
          ))
        ) : (
          <h3 className="status-message">No locations yet</h3>
        )}
      </main>
    </div>
  )
}

export default Locations
