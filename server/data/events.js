// Seed data for BookNook events. Each event belongs to a location via location_id,
// takes place in a major city, has a category (Book Club, Public Reading, or Book Sale),
// and features one of the individual books from the BookNookPlus catalog
// (title, cover image, price). Dates mix past and future (relative to mid-2026) so the
// countdown and the "event has passed" formatting can both be demonstrated.

// Book cover images + list prices, reused across events so each book is recognizable.
const BOOKS = {
  brain:       { title: 'The 5 Pillars of Brain Optimization',                price: '$14.99', image: 'https://m.media-amazon.com/images/I/61JeDb5SWIL._SL1499_.jpg' },
  patterns:    { title: 'Head First Design Patterns',                         price: '$40.00', image: 'https://m.media-amazon.com/images/I/91bobQSPQrL._SL1500_.jpg' },
  god:         { title: 'Return of the God Hypothesis',                       price: '$14.03', image: 'https://m.media-amazon.com/images/I/91zjozXE0yL._SL1500_.jpg' },
  economics:   { title: 'Basic Economics',                                    price: '$13.92', image: 'https://m.media-amazon.com/images/I/61eKb6xPlEL._SL1500_.jpg' },
  solve:       { title: 'How to Solve It',                                    price: '$11.34', image: 'https://m.media-amazon.com/images/I/71wsHB2XIOL._SL1500_.jpg' },
  bets:        { title: 'Thinking in Bets',                                   price: '$56.01', image: 'https://m.media-amazon.com/images/I/71EHb6TS9CL._SL1500_.jpg' },
  cpp:         { title: 'C++ High Performance',                               price: '$46.99', image: 'https://m.media-amazon.com/images/I/71Y0BwjDzmL._SL1360_.jpg' },
  forecasting: { title: 'Forecasting Time Series Data with Facebook Prophet', price: '$32.50', image: 'https://m.media-amazon.com/images/I/71gH-xccjTL._SL1360_.jpg' },
  meaning:     { title: 'Maps of Meaning',                                    price: '$24.99', image: 'https://m.media-amazon.com/images/I/61OGpzaVLvL._SL1500_.jpg' }
}

// Helper to attach a featured book's title, price, and cover to an event.
const withBook = (book, event) => ({
  ...event,
  featured_book: book.title,
  price: book.price,
  image: book.image
})

const eventData = [
  // =========================== BOOK CLUBS ===========================
  withBook(BOOKS.brain, {
    title: 'Brain Science Book Club',
    location_id: 1, city: 'New York, NY', category: 'Book Club',
    host: 'The Reading Room',
    description: 'A lively monthly discussion of "The 5 Pillars of Brain Optimization." Newcomers welcome — copies available at the desk.',
    event_date: '2026-09-12T18:00:00'
  }),
  withBook(BOOKS.bets, {
    title: 'Decision-Makers Book Club',
    location_id: 3, city: 'Chicago, IL', category: 'Book Club',
    host: 'Brew & Books Café',
    description: 'We dig into Annie Duke’s "Thinking in Bets" over coffee. Come ready to argue about probability and poker.',
    event_date: '2026-07-19T10:30:00'
  }),
  withBook(BOOKS.meaning, {
    title: 'Deep Thinkers Circle',
    location_id: 4, city: 'Portland, OR', category: 'Book Club',
    host: 'Moonlight Pages',
    description: 'A slow, chapter-by-chapter read of "Maps of Meaning." Heady conversation under the string lights.',
    event_date: '2026-10-08T19:30:00'
  }),
  withBook(BOOKS.patterns, {
    title: 'Dev Patterns Book Club',
    location_id: 2, city: 'San Francisco, CA', category: 'Book Club',
    host: 'Chapter & Verse',
    description: 'Software folks unite to work through "Head First Design Patterns," one pattern per session. Laptops encouraged.',
    event_date: '2026-04-22T18:30:00'
  }),
  withBook(BOOKS.god, {
    title: 'Big Questions Book Club',
    location_id: 1, city: 'Boston, MA', category: 'Book Club',
    host: 'Downtown Library Friends',
    description: 'A respectful, curious debate on Stephen Meyer’s "Return of the God Hypothesis." All viewpoints welcome.',
    event_date: '2026-11-05T18:00:00'
  }),
  withBook(BOOKS.economics, {
    title: 'Capitol Economics Reading Group',
    location_id: 3, city: 'Washington, DC', category: 'Book Club',
    host: 'Brew & Books Café',
    description: 'A policy-minded crowd works through Thomas Sowell’s "Basic Economics," chapter by chapter, with lively debate.',
    event_date: '2026-08-30T17:30:00'
  }),
  withBook(BOOKS.cpp, {
    title: 'Bay Area C++ Book Club',
    location_id: 2, city: 'San Francisco, CA', category: 'Book Club',
    host: 'Chapter & Verse',
    description: 'Performance-obsessed engineers benchmark their way through "C++ High Performance." Bring your hot loops.',
    event_date: '2026-03-11T19:00:00'
  }),

  // ========================= PUBLIC READINGS =========================
  withBook(BOOKS.economics, {
    title: 'Public Reading: Basic Economics',
    location_id: 1, city: 'Boston, MA', category: 'Public Reading',
    host: 'The Reading Room',
    description: 'A guest economist reads and unpacks key chapters of "Basic Economics," followed by open Q&A.',
    event_date: '2026-08-14T17:00:00'
  }),
  withBook(BOOKS.solve, {
    title: 'Evening Read-Aloud: How to Solve It',
    location_id: 4, city: 'Seattle, WA', category: 'Public Reading',
    host: 'Moonlight Pages',
    description: 'A theatrical group reading of Pólya’s problem-solving classic, with puzzles to try along the way.',
    event_date: '2026-03-28T20:00:00'
  }),
  withBook(BOOKS.brain, {
    title: 'Riverside Reading Hour',
    location_id: 3, city: 'Austin, TX', category: 'Public Reading',
    host: 'Brew & Books Café',
    description: 'A relaxed Sunday reading of selected passages from "The 5 Pillars of Brain Optimization." Coffee included.',
    event_date: '2026-06-28T09:30:00'
  }),
  withBook(BOOKS.forecasting, {
    title: 'Garden Read-Aloud: Data & Forecasts',
    location_id: 5, city: 'Denver, CO', category: 'Public Reading',
    host: 'The Story Garden',
    description: 'An open-air reading + walkthrough of "Forecasting Time Series Data with Facebook Prophet." Bring a notebook.',
    event_date: '2026-05-16T15:00:00'
  }),
  withBook(BOOKS.meaning, {
    title: 'Author Reading: Maps of Meaning',
    location_id: 4, city: 'Los Angeles, CA', category: 'Public Reading',
    host: 'Moonlight Pages',
    description: 'An immersive staged reading of "Maps of Meaning," exploring myth and the architecture of belief.',
    event_date: '2026-10-24T19:00:00'
  }),
  withBook(BOOKS.bets, {
    title: 'Strategy Reading Night: Thinking in Bets',
    location_id: 1, city: 'New York, NY', category: 'Public Reading',
    host: 'The Reading Room',
    description: 'A live read of the sharpest passages from "Thinking in Bets," with audience wagers on the outcomes.',
    event_date: '2026-02-10T18:30:00'
  }),

  // =========================== BOOK SALES ===========================
  withBook(BOOKS.cpp, {
    title: 'Tech Shelf Book Sale',
    location_id: 2, city: 'San Francisco, CA', category: 'Book Sale',
    host: 'Chapter & Verse',
    description: 'Our annual programming-shelf clear-out. Featured pick: "C++ High Performance" at a steal. Cash & card welcome.',
    event_date: '2026-09-26T11:00:00'
  }),
  withBook(BOOKS.forecasting, {
    title: 'Summer Book Sale',
    location_id: 5, city: 'Denver, CO', category: 'Book Sale',
    host: 'Westside Community Board',
    description: 'A weekend of pop-up sellers, used-book swaps, and discounted data-science titles in the open-air garden.',
    event_date: '2026-08-22T10:00:00'
  }),
  withBook(BOOKS.patterns, {
    title: 'Half-Price Weekend',
    location_id: 3, city: 'Austin, TX', category: 'Book Sale',
    host: 'Brew & Books Café',
    description: 'Everything on the café shelves is half off — including the ever-popular "Head First Design Patterns."',
    event_date: '2026-02-15T09:00:00'
  }),
  withBook(BOOKS.god, {
    title: 'Charity Book Sale: Big Ideas',
    location_id: 1, city: 'New York, NY', category: 'Book Sale',
    host: 'Downtown Library Friends',
    description: 'Proceeds fund the children’s wing. Hardcovers of "Return of the God Hypothesis" and hundreds more, gently used.',
    event_date: '2026-12-06T12:00:00'
  }),
  withBook(BOOKS.bets, {
    title: 'Pop-Up Sale: Decision Science',
    location_id: 4, city: 'Las Vegas, NV', category: 'Book Sale',
    host: 'Moonlight Pages',
    description: 'A one-night pop-up of strategy and decision-making titles, headlined by a discounted "Thinking in Bets."',
    event_date: '2026-07-02T19:00:00'
  }),
  withBook(BOOKS.meaning, {
    title: 'Manhattan Rare Book Sale',
    location_id: 1, city: 'New York, NY', category: 'Book Sale',
    host: 'The Reading Room',
    description: 'Collectors’ weekend featuring signed and first-edition copies of "Maps of Meaning" and other modern classics.',
    event_date: '2026-11-21T10:00:00'
  }),
  withBook(BOOKS.economics, {
    title: 'Chicago Mega Book Sale',
    location_id: 3, city: 'Chicago, IL', category: 'Book Sale',
    host: 'Brew & Books Café',
    description: 'Three floors of bargains by the lake. The economics table — led by "Basic Economics" — always sells out first.',
    event_date: '2026-09-05T09:00:00'
  }),
  withBook(BOOKS.solve, {
    title: 'Seattle Used & Rare Book Fair',
    location_id: 2, city: 'Seattle, WA', category: 'Book Sale',
    host: 'Chapter & Verse',
    description: 'A rainy-weekend fair of secondhand treasures, with a math-and-logic corner anchored by "How to Solve It."',
    event_date: '2026-04-04T10:00:00'
  }),
  withBook(BOOKS.brain, {
    title: 'Miami Wellness Book Sale',
    location_id: 5, city: 'Miami, FL', category: 'Book Sale',
    host: 'The Story Garden',
    description: 'A beachside sale of health, mindfulness, and brain-science reads, featuring "The 5 Pillars of Brain Optimization."',
    event_date: '2026-01-31T11:00:00'
  })
]

export default eventData
