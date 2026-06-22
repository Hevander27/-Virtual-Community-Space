// API calls related to locations
const BASE_URL = '/api/locations'

// Get every location
export const getAllLocations = async () => {
  const response = await fetch(BASE_URL)
  if (!response.ok) throw new Error('Failed to fetch locations')
  return response.json()
}

// Get a single location by id
export const getLocationById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`)
  if (!response.ok) throw new Error('Failed to fetch location')
  return response.json()
}

// Get all events that take place at a given location
export const getEventsByLocation = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}/events`)
  if (!response.ok) throw new Error('Failed to fetch events for location')
  return response.json()
}

export default { getAllLocations, getLocationById, getEventsByLocation }
