import { pool } from '../config/database.js'

// GET /api/locations  -> all locations
const getLocations = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM locations ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

// GET /api/locations/:locationId  -> a single location
const getLocationById = async (req, res) => {
  try {
    const { locationId } = req.params
    const results = await pool.query('SELECT * FROM locations WHERE id = $1', [locationId])

    if (results.rows.length > 0) {
      res.status(200).json(results.rows[0])
    } else {
      res.status(404).json({ message: 'Location not found' })
    }
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

// GET /api/locations/:locationId/events  -> all events at a location
const getEventsByLocation = async (req, res) => {
  try {
    const { locationId } = req.params
    const results = await pool.query(
      'SELECT * FROM events WHERE location_id = $1 ORDER BY event_date ASC',
      [locationId]
    )
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export default {
  getLocations,
  getLocationById,
  getEventsByLocation
}
