import { pool } from '../config/database.js'
import '../config/dotenv.js'
import locationData from '../data/locations.js'
import eventData from '../data/events.js'

// Create the locations table (parent) and events table (child, references locations).
const createTables = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      neighborhood VARCHAR(100) NOT NULL,
      image VARCHAR(500) NOT NULL,
      description TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      location_id INTEGER NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
      title VARCHAR(150) NOT NULL,
      category VARCHAR(50) NOT NULL,
      featured_book VARCHAR(150) NOT NULL,
      price VARCHAR(20) NOT NULL,
      host VARCHAR(100) NOT NULL,
      image VARCHAR(500) NOT NULL,
      description TEXT NOT NULL,
      event_date TIMESTAMP NOT NULL
    );
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 locations and events tables created successfully')
  } catch (err) {
    console.error('⚠️ error creating tables', err)
  }
}

const seedLocationsTable = async () => {
  for (const location of locationData) {
    const insertQuery = {
      text: 'INSERT INTO locations (name, neighborhood, image, description) VALUES ($1, $2, $3, $4)',
      values: [location.name, location.neighborhood, location.image, location.description]
    }

    try {
      await pool.query(insertQuery)
      console.log(`📍 ${location.name} added successfully`)
    } catch (err) {
      console.error(`⚠️ error inserting location ${location.name}`, err)
    }
  }
}

const seedEventsTable = async () => {
  for (const event of eventData) {
    const insertQuery = {
      text: 'INSERT INTO events (location_id, title, category, featured_book, price, host, image, description, event_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
      values: [event.location_id, event.title, event.category, event.featured_book, event.price, event.host, event.image, event.description, event.event_date]
    }

    try {
      await pool.query(insertQuery)
      console.log(`🗓️  ${event.title} added successfully`)
    } catch (err) {
      console.error(`⚠️ error inserting event ${event.title}`, err)
    }
  }
}

const resetDatabase = async () => {
  await createTables()
  await seedLocationsTable()
  await seedEventsTable()
}

resetDatabase()
  .then(() => {
    console.log('✅ Database seeded successfully')
    console.log('Closing database connection...')
    pool.end()
  })
  .catch((err) => {
    console.error('⚠️ Error seeding database:', err)
    pool.end()
  })
