import React from 'react'
import './EventCard.css'
import { useCountdown, formatEventDate } from '../utils/countdown'

// Maps an event category to a CSS modifier so each type gets its own badge color.
const categoryClass = (category) =>
  'event-card__category--' + (category || '').toLowerCase().replace(/\s+/g, '-')

// A card for a single event. Shows the featured book, a category badge, a live
// countdown, and renders with "passed" styling once the event date is in the past.
const EventCard = ({ event, showLocation = false }) => {
  const countdown = useCountdown(event.event_date)

  return (
    <div className={`event-card ${countdown.hasPassed ? 'event-card--passed' : ''}`}>
      <div className="event-card__image" style={{ backgroundImage: `url(${event.image})` }} />
      <div className="event-card__body">
        <span className={`event-card__category ${categoryClass(event.category)}`}>
          {event.category}
        </span>

        <h3 className="event-card__title">{event.title}</h3>

        {event.city && (
          <p className="event-card__location">
            📍 {event.city}
            {showLocation && event.location_name && <span className="event-card__venue"> · {event.location_name}</span>}
          </p>
        )}

        {event.featured_book && (
          <p className="event-card__book">
            📖 <strong>{event.featured_book}</strong>
            {event.price && <span className="event-card__price">{event.price}</span>}
          </p>
        )}

        <p className="event-card__date">{formatEventDate(event.event_date)}</p>
        <p className="event-card__host">Hosted by {event.host}</p>
        <p className="event-card__description">{event.description}</p>

        <div className="event-card__countdown">
          {countdown.hasPassed ? (
            <span className="event-card__passed-label">Event passed · {countdown.label}</span>
          ) : (
            <span className="event-card__upcoming-label">Starts {countdown.label}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventCard
