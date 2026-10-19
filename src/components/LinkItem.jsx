import { useRef } from 'react'

function LinkItem({ link, onStatusChange }) {
  const isExternal = link.url.startsWith('http')
  const isHovered = useRef(false)
  const isFocused = useRef(false)
  const preview = `Open ${link.label}`

  function showPreview() {
    onStatusChange(preview)
  }

  function handleMouseEnter() {
    isHovered.current = true
    showPreview()
  }

  function handleMouseLeave() {
    isHovered.current = false

    if (!isFocused.current) {
      onStatusChange('Ready')
    }
  }

  function handleFocus() {
    isFocused.current = true
    showPreview()
  }

  function handleBlur() {
    isFocused.current = false

    if (!isHovered.current) {
      onStatusChange('Ready')
    }
  }

  return (
    <li>
      <a
        href={link.url}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...(isExternal && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
      >
        <img src={link.icon} alt="" aria-hidden="true" />
        {link.label}
      </a>
    </li>
  )
}

export default LinkItem
