import express from 'express'
import EventsController from '../controllers/events.js'

const router = express.Router()

// /api/events
router.get('/', EventsController.getEvents)

// /api/events/:eventId
router.get('/:eventId', EventsController.getEventById)

export default router
