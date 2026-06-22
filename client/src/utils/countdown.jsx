import { useState, useEffect } from 'react'

// Returns a human-friendly string for the time between now and the target date.
// If the event is in the past, `hasPassed` is true.
export const formatCountdown = (targetDate) => {
  const target = new Date(targetDate).getTime()
  const now = Date.now()
  const diff = target - now
  const hasPassed = diff <= 0

  const abs = Math.abs(diff)
  const days = Math.floor(abs / (1000 * 60 * 60 * 24))
  const hours = Math.floor((abs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((abs % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((abs % (1000 * 60)) / 1000)

  const label = `${days}d ${hours}h ${minutes}m ${seconds}s`

  return {
    hasPassed,
    label: hasPassed ? `${label} ago` : `in ${label}`,
    days,
    hours,
    minutes,
    seconds
  }
}

// Live-updating countdown hook — re-renders every second.
export const useCountdown = (targetDate) => {
  const [countdown, setCountdown] = useState(() => formatCountdown(targetDate))

  useEffect(() => {
    setCountdown(formatCountdown(targetDate))
    const interval = setInterval(() => {
      setCountdown(formatCountdown(targetDate))
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return countdown
}

// Nicely formatted date string for display, e.g. "Fri, Sep 18, 2026, 6:30 PM"
export const formatEventDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  })
}
