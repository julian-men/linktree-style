import { useState } from 'react'
import { resolveNavigationCommand } from '../utils/navigationCommands.js'

const errorMessage =
  'Page not found. Try github, linkedin, work, resume, or email.'

function navigateToLink(link) {
  if (link.url.startsWith('http')) {
    window.open(link.url, '_blank', 'noopener,noreferrer')
    return
  }

  window.location.assign(link.url)
}

function AddressBar({ links, onStatusChange, onTemporaryStatus }) {
  const [command, setCommand] = useState('about:julian')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const destination = resolveNavigationCommand(command, links)

    if (!destination) {
      setError(errorMessage)
      onStatusChange('Address not found')
      return
    }

    setError('')

    if (destination.type === 'home') {
      onTemporaryStatus('Home')
      document.getElementById('profile')?.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      })
      return
    }

    onTemporaryStatus(`Opening ${destination.link.label}...`)
    navigateToLink(destination.link)
  }

  function handleChange(event) {
    setCommand(event.target.value)
    setError('')
    onStatusChange('Ready')
  }

  return (
    <form
      className="window-address"
      aria-label="Navigate Julian's links"
      onSubmit={handleSubmit}
    >
      <label htmlFor="address-input">Address</label>
      <input
        id="address-input"
        name="address"
        type="text"
        value={command}
        onChange={handleChange}
        onFocus={(event) => event.currentTarget.select()}
        autoComplete="off"
        spellCheck="false"
      />
      <button type="submit">Go</button>
      <p className="address-hint">Try: github, linkedin, work, resume, or email</p>
      <p className="address-error" role="status" aria-live="polite">
        {error}
      </p>
    </form>
  )
}

export default AddressBar
