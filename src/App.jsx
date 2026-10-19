import Profile from './components/Profile.jsx'
import LinkItem from './components/LinkItem.jsx'
import TimeGreeting from './components/TimeGreeting.jsx'
import links from './data/links.js'

function App() {
  return (
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
  )
}

export default App
