// Seed data for BookNook events. Each event belongs to a location via location_id.
// Dates are a mix of past and future (relative to mid-2026) so the countdown and
// "event has passed" formatting can both be demonstrated.
const eventData = [
  // The Reading Room (1)
  {
    title: 'An Evening with Tana French',
    location_id: 1,
    host: 'Downtown Library Friends',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&q=80',
    description: 'Bestselling mystery author Tana French discusses her latest novel, followed by a Q&A and signing.',
    event_date: '2026-09-18T18:30:00'
  },
  {
    title: 'Classics Book Club: Jane Eyre',
    location_id: 1,
    host: 'The Reading Room',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    description: 'Monthly deep-dive into a literary classic. This month: Charlotte Brontë’s Jane Eyre. Newcomers welcome.',
    event_date: '2026-07-12T17:00:00'
  },
  {
    title: 'Silent Reading Hour',
    location_id: 1,
    host: 'The Reading Room',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80',
    description: 'Bring your current read and enjoy a dedicated hour of quiet, distraction-free reading with tea provided.',
    event_date: '2026-05-30T16:00:00'
  },

  // Chapter & Verse (2)
  {
    title: 'Friday Night Poetry Slam',
    location_id: 2,
    host: 'Chapter & Verse',
    image: 'https://images.unsplash.com/photo-1470549638415-0a0755be0619?w=800&q=80',
    description: 'Open-mic poetry competition with cash prizes. Sign up to perform or come to cheer on local poets.',
    event_date: '2026-08-07T20:00:00'
  },
  {
    title: 'Indie Author Signing: R. K. Vance',
    location_id: 2,
    host: 'Chapter & Verse',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
    description: 'Meet rising sci-fi author R. K. Vance and grab a signed first edition of the new "Aurora" trilogy.',
    event_date: '2026-10-02T19:00:00'
  },
  {
    title: 'Banned Books Week Panel',
    location_id: 2,
    host: 'Free Speech Collective',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80',
    description: 'A panel discussion on censorship, intellectual freedom, and the books that shaped the conversation.',
    event_date: '2026-04-15T18:00:00'
  },

  // Brew & Books Café (3)
  {
    title: 'Weekend Reading Circle',
    location_id: 3,
    host: 'Brew & Books Café',
    image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800&q=80',
    description: 'A relaxed Sunday-morning circle to share what you’re reading over fresh coffee and pastries.',
    event_date: '2026-06-28T10:00:00'
  },
  {
    title: 'Latte & Literature: Cozy Mysteries',
    location_id: 3,
    host: 'Brew & Books Café',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
    description: 'A themed morning celebrating cozy mysteries with recommendations, swaps, and a signature spiced latte.',
    event_date: '2026-11-14T09:30:00'
  },

  // Moonlight Pages (4)
  {
    title: 'Writers’ Workshop: First Chapters',
    location_id: 4,
    host: 'Moonlight Pages',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    description: 'Bring the opening chapter of your manuscript for friendly, constructive feedback from fellow writers.',
    event_date: '2026-09-05T19:30:00'
  },
  {
    title: 'Open-Mic Storytelling Night',
    location_id: 4,
    host: 'Moonlight Pages',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80',
    description: 'Five minutes, one true story, no notes. Share a tale or simply listen under the string lights.',
    event_date: '2026-03-21T20:30:00'
  },
  {
    title: 'Midnight Fantasy Read-Along',
    location_id: 4,
    host: 'Moonlight Pages',
    image: 'https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=800&q=80',
    description: 'A theatrical late-night group reading of a beloved fantasy epic, complete with costumes and cocoa.',
    event_date: '2026-12-13T22:00:00'
  },

  // The Story Garden (5)
  {
    title: 'Saturday Story Hour for Kids',
    location_id: 5,
    host: 'The Story Garden',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    description: 'Interactive picture-book read-alouds and crafts for ages 3–8. Free for families.',
    event_date: '2026-07-04T11:00:00'
  },
  {
    title: 'Summer Book Fair',
    location_id: 5,
    host: 'Westside Community Board',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80',
    description: 'A weekend of pop-up booksellers, author booths, food trucks, and a used-book swap tent.',
    event_date: '2026-08-22T10:00:00'
  },
  {
    title: 'Seed & Read Community Read-Aloud',
    location_id: 5,
    host: 'The Story Garden',
    image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80',
    description: 'Neighbors take turns reading aloud from a shared novel while we plant the season’s garden together.',
    event_date: '2026-05-09T15:00:00'
  }
]

export default eventData
