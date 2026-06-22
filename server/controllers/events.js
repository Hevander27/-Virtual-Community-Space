import { pool } from '../config/database.js'

// GET /api/events  -> all events, joined with their location name (for the all-events page)
const getEvents = async (req, res) => {
  try {
    const results = await pool.query(
      `SELECT events.*, locations.name AS location_name, locations.neighborhood
       FROM events
       JOIN locations ON events.location_id = locations.id
       ORDER BY events.event_date ASC`
    )
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

// GET /api/events/:eventId  -> a single event with its location name
const getEventById = async (req, res) => {
  try {
    const { eventId } = req.params
    const results = await pool.query(
      `SELECT events.*, locations.name AS location_name, locations.neighborhood
       FROM events
       JOIN locations ON events.location_id = locations.id
       WHERE events.id = $1`,
      [eventId]
    )

    if (results.rows.length > 0) {
      res.status(200).json(results.rows[0])
    } else {
      res.status(404).json({ message: 'Event not found' })
    }
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export default {
  getEvents,
  getEventById
}
