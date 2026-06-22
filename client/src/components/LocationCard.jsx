import React from 'react'
import { Link } from 'react-router-dom'
import './LocationCard.css'

// A clickable visual tile for a single location. Navigates to the
// location's detail page where its events are listed.
const LocationCard = ({ id, name, neighborhood, image, description }) => {
  return (
    <Link to={`/locations/${id}`} className="location-card">
      <div className="location-card__image" style={{ backgroundImage: `url(${image})` }}>
        <span className="location-card__badge">{neighborhood}</span>
      </div>
      <div className="location-card__body">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="location-card__cta">View events →</span>
      </div>
    </Link>
  )
}

export default LocationCard
