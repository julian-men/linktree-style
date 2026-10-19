import Profile from './components/Profile.jsx'
import LinkItem from './components/LinkItem.jsx'
import TimeGreeting from './components/TimeGreeting.jsx'
import links from './data/links.js'

function App() {
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

        <div className="window-address" aria-hidden="true">
          <span className="address-label">Address</span>
          <span className="address-value">about:julian</span>
        </div>

        <main>
          <TimeGreeting />
          <Profile />

          <section aria-labelledby="links-heading">
            <h2 id="links-heading">Links</h2>
            <ul>
              {links.map((link) => (
                <LinkItem key={link.id} link={link} />
              ))}
            </ul>
          </section>
        </main>

        <div className="window-status" aria-hidden="true">Ready</div>
      </div>
    </div>
  )
}

export default App
