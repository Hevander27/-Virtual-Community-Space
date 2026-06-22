// Seed data for BookNook events. Each event belongs to a location via location_id,
// has a category (Book Club, Public Reading, or Book Sale), and features one of the
// individual books carried over from the BookNookPlus catalog (title, cover, price).
// Dates mix past and future (relative to mid-2026) so the countdown and the
// "event has passed" formatting can both be demonstrated.
const eventData = [
  // ---------- Book Clubs ----------
  {
    title: 'Brain Science Book Club',
    location_id: 1,
    category: 'Book Club',
    featured_book: 'The 5 Pillars of Brain Optimization',
    price: '$14.99',
    host: 'The Reading Room',
    image: 'https://m.media-amazon.com/images/I/61JeDb5SWIL._SL1499_.jpg',
    description: 'A lively monthly discussion of "The 5 Pillars of Brain Optimization." Newcomers welcome — copies available at the desk.',
    event_date: '2026-09-12T18:00:00'
  },
  {
    title: 'Decision-Makers Book Club',
    location_id: 3,
    category: 'Book Club',
    featured_book: 'Thinking in Bets',
    price: '$56.01',
    host: 'Brew & Books Café',
    image: 'https://m.media-amazon.com/images/I/71EHb6TS9CL._SL1500_.jpg',
    description: 'We dig into Annie Duke’s "Thinking in Bets" over coffee. Come ready to argue about probability and poker.',
    event_date: '2026-07-19T10:30:00'
  },
  {
    title: 'Deep Thinkers Circle',
    location_id: 4,
    category: 'Book Club',
    featured_book: 'Maps of Meaning',
    price: '$24.99',
    host: 'Moonlight Pages',
    image: 'https://m.media-amazon.com/images/I/61OGpzaVLvL._SL1500_.jpg',
    description: 'A slow, chapter-by-chapter read of "Maps of Meaning." Heady conversation under the string lights.',
    event_date: '2026-10-08T19:30:00'
  },
  {
    title: 'Dev Patterns Book Club',
    location_id: 2,
    category: 'Book Club',
    featured_book: 'Head First Design Patterns',
    price: '$40.00',
    host: 'Chapter & Verse',
    image: 'https://m.media-amazon.com/images/I/91bobQSPQrL._SL1500_.jpg',
    description: 'Software folks unite to work through "Head First Design Patterns," one pattern per session. Laptops encouraged.',
    event_date: '2026-04-22T18:30:00'
  },
  {
    title: 'Big Questions Book Club',
    location_id: 1,
    category: 'Book Club',
    featured_book: 'Return of the God Hypothesis',
    price: '$14.03',
    host: 'Downtown Library Friends',
    image: 'https://m.media-amazon.com/images/I/91zjozXE0yL._SL1500_.jpg',
    description: 'A respectful, curious debate on Stephen Meyer’s "Return of the God Hypothesis." All viewpoints welcome.',
    event_date: '2026-11-05T18:00:00'
  },

  // ---------- Public Readings ----------
  {
    title: 'Public Reading: Basic Economics',
    location_id: 1,
    category: 'Public Reading',
    featured_book: 'Basic Economics',
    price: '$13.92',
    host: 'The Reading Room',
    image: 'https://m.media-amazon.com/images/I/61eKb6xPlEL._SL1500_.jpg',
    description: 'A guest economist reads and unpacks key chapters of Thomas Sowell’s "Basic Economics," followed by open Q&A.',
    event_date: '2026-08-14T17:00:00'
  },
  {
    title: 'Evening Read-Aloud: How to Solve It',
    location_id: 4,
    category: 'Public Reading',
    featured_book: 'How to Solve It',
    price: '$11.34',
    host: 'Moonlight Pages',
    image: 'https://m.media-amazon.com/images/I/71wsHB2XIOL._SL1500_.jpg',
    description: 'A theatrical group reading of Pólya’s problem-solving classic "How to Solve It," with puzzles to try along the way.',
    event_date: '2026-03-28T20:00:00'
  },
  {
    title: 'Riverside Reading Hour',
    location_id: 3,
    category: 'Public Reading',
    featured_book: 'The 5 Pillars of Brain Optimization',
    price: '$14.99',
    host: 'Brew & Books Café',
    image: 'https://m.media-amazon.com/images/I/61JeDb5SWIL._SL1499_.jpg',
    description: 'A relaxed Sunday reading of selected passages from "The 5 Pillars of Brain Optimization." Coffee included.',
    event_date: '2026-06-28T09:30:00'
  },
  {
    title: 'Garden Read-Aloud: Data & Forecasts',
    location_id: 5,
    category: 'Public Reading',
    featured_book: 'Forecasting Time Series Data with Facebook Prophet',
    price: '$32.50',
    host: 'The Story Garden',
    image: 'https://m.media-amazon.com/images/I/71gH-xccjTL._SL1360_.jpg',
    description: 'An open-air reading + walkthrough of "Forecasting Time Series Data with Facebook Prophet." Bring a notebook.',
    event_date: '2026-05-16T15:00:00'
  },

  // ---------- Book Sales ----------
  {
    title: 'Tech Shelf Book Sale',
    location_id: 2,
    category: 'Book Sale',
    featured_book: 'C++ High Performance',
    price: '$46.99',
    host: 'Chapter & Verse',
    image: 'https://m.media-amazon.com/images/I/71Y0BwjDzmL._SL1360_.jpg',
    description: 'Our annual programming-shelf clear-out. Featured pick: "C++ High Performance" at a steal. Cash & card welcome.',
    event_date: '2026-09-26T11:00:00'
  },
  {
    title: 'Summer Book Sale',
    location_id: 5,
    category: 'Book Sale',
    featured_book: 'Forecasting Time Series Data with Facebook Prophet',
    price: '$32.50',
    host: 'Westside Community Board',
    image: 'https://m.media-amazon.com/images/I/71gH-xccjTL._SL1360_.jpg',
    description: 'A weekend of pop-up sellers, used-book swaps, and discounted data-science titles in the open-air garden.',
    event_date: '2026-08-22T10:00:00'
  },
  {
    title: 'Half-Price Weekend',
    location_id: 3,
    category: 'Book Sale',
    featured_book: 'Head First Design Patterns',
    price: '$40.00',
    host: 'Brew & Books Café',
    image: 'https://m.media-amazon.com/images/I/91bobQSPQrL._SL1500_.jpg',
    description: 'Everything on the café shelves is half off — including the ever-popular "Head First Design Patterns."',
    event_date: '2026-02-15T09:00:00'
  },
  {
    title: 'Charity Book Sale: Big Ideas',
    location_id: 1,
    category: 'Book Sale',
    featured_book: 'Return of the God Hypothesis',
    price: '$14.03',
    host: 'Downtown Library Friends',
    image: 'https://m.media-amazon.com/images/I/91zjozXE0yL._SL1500_.jpg',
    description: 'Proceeds fund the children’s wing. Hardcovers of "Return of the God Hypothesis" and hundreds more, gently used.',
    event_date: '2026-12-06T12:00:00'
  },
  {
    title: 'Pop-Up Sale: Decision Science',
    location_id: 4,
    category: 'Book Sale',
    featured_book: 'Thinking in Bets',
    price: '$56.01',
    host: 'Moonlight Pages',
    image: 'https://m.media-amazon.com/images/I/71EHb6TS9CL._SL1500_.jpg',
    description: 'A one-night pop-up of strategy and decision-making titles, headlined by a discounted "Thinking in Bets."',
    event_date: '2026-07-02T19:00:00'
  }
]

export default eventData
