import express from 'express'
import LocationsController from '../controllers/locations.js'

const router = express.Router()

// /api/locations
router.get('/', LocationsController.getLocations)

// /api/locations/:locationId
router.get('/:locationId', LocationsController.getLocationById)

// /api/locations/:locationId/events  -> events held at this location
router.get('/:locationId/events', LocationsController.getEventsByLocation)

export default router
