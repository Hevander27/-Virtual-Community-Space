import React from 'react'
import './EventCard.css'
import { useCountdown, formatEventDate } from '../utils/countdown'

// A card for a single event. Shows a live countdown to the event, and
// renders with "passed" styling once the event date is in the past.
const EventCard = ({ event, showLocation = false }) => {
  const countdown = useCountdown(event.event_date)

  return (
    <div className={`event-card ${countdown.hasPassed ? 'event-card--passed' : ''}`}>
      <div className="event-card__image" style={{ backgroundImage: `url(${event.image})` }} />
      <div className="event-card__body">
        <h3 className="event-card__title">{event.title}</h3>

        {showLocation && event.location_name && (
          <p className="event-card__location">📍 {event.location_name}</p>
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
