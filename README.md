<img width="465" height="360" alt="Screen%20Recording%20-%20Jun%2022%2C%202026" src="https://github.com/user-attachments/assets/5604988f-8978-4477-b6d5-262ec3905caf" />
# WEB103 Project 3 - *BookNookCommunity*

Submitted by: **Hevander Da Costa**

About this web app: **BookNook is a virtual community space for book lovers. Users browse a visual grid of literary venues — libraries, indie bookstores, cafés, and reading lounges — and click any venue to see the readings, author signings, book clubs, and workshops happening there. Every event shows a live countdown to when it starts, and past events are clearly marked. A dedicated "All Events" page lets users browse and filter every event across the community by location.**

Time spent: **X** hours

## Tech Stack

- **Frontend:** React + Vite, React Router
- **Backend:** Node.js + Express
- **Database:** PostgreSQL (hosted on Render)

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database** (and a hosted PostgreSQL database)
- [x] **The database contains an appropriately structured events table** (plus a related `locations` table)
- [x] **Front page of web app is functional and appropriately styled**
- [x] **The web app displays a title** ("BookNook")
- [x] **Website includes a visual interface that allows users to select a location** (a grid of clickable venue cards with images — not a plain list of links)
- [x] **Each location has a corresponding detail page with its own unique URL** (`/locations/:id`)
- [x] **Clicking on a location navigates to its detail page and displays all events associated with that location**

## Stretch Features

The following **stretch** features are implemented:

- [x] The app includes an additional Events page that shows all possible events (`/events`)
- [x] Users can sort/filter events by location (filter bar on the Events page)
- [x] Each event includes a live countdown to when the event will occur
- [x] Events appear with different formatting when the event has passed (dimmed, struck-through title, "Event passed" label with elapsed time)

## Architecture

```
server/
  config/database.js        # pg Pool connected to the hosted Postgres (SSL)
  config/reset.js           # creates + seeds the locations and events tables
  data/locations.js         # seed data for venues
  data/events.js            # seed data for events (FK to locations)
  controllers/locations.js  # getLocations, getLocationById, getEventsByLocation
  controllers/events.js     # getEvents (joined w/ location), getEventById
  routes/locations.js       # /api/locations, /api/locations/:id, /api/locations/:id/events
  routes/events.js          # /api/events, /api/events/:id
  server.js                 # mounts the routers

client/
  src/services/LocationsAPI.jsx   # getAllLocations, getLocationById, getEventsByLocation
  src/services/EventsAPI.jsx      # getAllEvents, getEventById
  src/pages/Locations.jsx         # home: visual grid of locations
  src/pages/LocationDetails.jsx   # one location + its events
  src/pages/Events.jsx            # all events + filter by location
  src/components/LocationCard.jsx # clickable venue tile
  src/components/EventCard.jsx    # event w/ live countdown
  src/utils/countdown.jsx         # useCountdown hook + date helpers
```

### API Routes

| Method | Route | Description |
| ------ | ----- | ----------- |
| GET | `/api/locations` | All locations |
| GET | `/api/locations/:id` | A single location |
| GET | `/api/locations/:id/events` | All events at a location |
| GET | `/api/events` | All events (with location name) |
| GET | `/api/events/:id` | A single event |

## Getting Started

1. **Database** — create a PostgreSQL database on Render and copy its connection values into `server/.env`:
   ```
   PGDATABASE="..."
   PGHOST="...oregon-postgres.render.com"
   PGPASSWORD="..."
   PGPORT=...
   PGUSER="..."
   ```
2. **Backend** — from `server/`: `npm install`, then `npm run reset` to create + seed the tables, then `npm run dev` to start the API on `http://localhost:3001`.
3. **Frontend** — from `client/`: `npm install`, then `npm run dev`. Vite proxies `/api` to the backend. Open `http://localhost:5173`.

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='https://imgur.com/a/YtqzqX3.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace the link above with your own GIF. A raw screen recording (videoplayback.mp4) is included in the repo root — convert it to a GIF before submitting. -->
GIF created with ...  GIF tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

- The starter code was a single-resource "gifts" app; it was restructured into a two-table (locations → events) relational model with a join so events can display their venue.
- Countdowns update every second via a `useCountdown` hook; the same logic drives the "passed" styling so the UI is always consistent with the current time.

## License

Copyright 2026 Hevander Da Costa

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
