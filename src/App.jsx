import Profile from './components/Profile.jsx'
import LinkCard from './components/LinkCard.jsx'
import links from './data/links.js'

function App() {
  return (
    <main>
      <Profile />

      <section aria-labelledby="links-heading">
        <h2 id="links-heading">Links</h2>
        <ul>
          {links.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
