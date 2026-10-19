import { useEffect, useState } from 'react'
import { getGreetingForHour } from '../utils/timeGreeting.js'

function getCurrentGreeting() {
  return getGreetingForHour(new Date().getHours())
}

function TimeGreeting() {
  const [currentTime, setCurrentTime] = useState(() => new Date())
  const [greeting, setGreeting] = useState(getCurrentGreeting)

  useEffect(() => {
    const updateGreeting = () => {
      const nextTime = new Date()
      const nextGreeting = getGreetingForHour(nextTime.getHours())

      setCurrentTime(nextTime)
      setGreeting((currentGreeting) =>
        currentGreeting === nextGreeting ? currentGreeting : nextGreeting,
      )
    }

    const intervalId = window.setInterval(updateGreeting, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  })
  const formattedDate = currentTime.toLocaleDateString([], {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="time-greeting">
      <p aria-live="polite">{greeting}</p>
      <time dateTime={currentTime.toISOString()}>{formattedTime}</time>
      <time dateTime={currentTime.toISOString()}>{formattedDate}</time>
    </div>
  )
}

export default TimeGreeting
