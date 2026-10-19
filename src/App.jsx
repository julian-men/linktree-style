import { useEffect, useRef, useState } from 'react'
import Profile from './components/Profile.jsx'
import LinkItem from './components/LinkItem.jsx'
import TimeGreeting from './components/TimeGreeting.jsx'
import AddressBar from './components/AddressBar.jsx'
import links from './data/links.js'

function App() {
  const [status, setStatus] = useState('Ready')
  const statusResetTimer = useRef(null)

  function clearStatusResetTimer() {
    if (statusResetTimer.current) {
      window.clearTimeout(statusResetTimer.current)
      statusResetTimer.current = null
    }
  }

  function showStatus(message) {
    clearStatusResetTimer()
    setStatus(message)
  }

  function showTemporaryStatus(message) {
    clearStatusResetTimer()
    setStatus(message)
    statusResetTimer.current = window.setTimeout(() => {
      setStatus('Ready')
      statusResetTimer.current = null
    }, 1500)
  }

  useEffect(() => () => clearStatusResetTimer(), [])

  return (
    <div className="desktop">
      <div className="browser-window">
        <div className="window-titlebar" aria-hidden="true">
          <span className="window-title">Julian Mendoza - Personal Home Page</span>
          <span className="window-controls">
            <span className="window-control">_</span>
            <span className="window-control">□</span>
            <span className="window-control">×</span>
          </span>
        </div>

        <div className="window-menu" aria-hidden="true">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Favorites</span>
          <span>Help</span>
        </div>

        <AddressBar
          links={links}
          onStatusChange={showStatus}
          onTemporaryStatus={showTemporaryStatus}
        />

        <main>
          <TimeGreeting />
          <Profile />

          <section aria-labelledby="links-heading">
            <h2 id="links-heading">Links</h2>
            <ul>
              {links.map((link) => (
                <LinkItem
                  key={link.id}
                  link={link}
                  onStatusChange={showStatus}
                />
              ))}
            </ul>
          </section>
        </main>

        <div className="window-status" aria-hidden="true">
          <span className="status-panel">{status}</span>
          <span className="status-zone">Internet zone</span>
        </div>
      </div>
    </div>
  )
}

export default App
