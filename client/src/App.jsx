import './App.css'
import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationDetails from './pages/LocationDetails'
import Events from './pages/Events'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  // Application routes
  const element = useRoutes([
    { path: '/', element: <Locations /> },
    { path: '/locations/:id', element: <LocationDetails /> },
    { path: '/events', element: <Events /> },
    { path: '/*', element: <PageNotFound /> }
  ])

  return (
    <div className="App">
      <header className="site-header">
        <div className="header-container">
          <Link to="/" className="header-left">
            <img src="/logo.png" alt="BookNook logo" />
            <h1>BookNook</h1>
          </Link>
          <nav className="header-right">
            <Link to="/"><button className="navBtn">Locations</button></Link>
            <Link to="/events"><button className="navBtn">All Events</button></Link>
          </nav>
        </div>
      </header>

      {element}
    </div>
  )
}

export default App
