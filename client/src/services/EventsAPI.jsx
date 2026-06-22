// API calls related to events
const BASE_URL = '/api/events'

// Get every event (each includes its location_name and neighborhood)
export const getAllEvents = async () => {
  const response = await fetch(BASE_URL)
  if (!response.ok) throw new Error('Failed to fetch events')
  return response.json()
}

// Get a single event by id
export const getEventById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`)
  if (!response.ok) throw new Error('Failed to fetch event')
  return response.json()
}

export default { getAllEvents, getEventById }
