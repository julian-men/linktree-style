function LinkItem({ link }) {
  const isExternal = link.url.startsWith('http')

  return (
    <li>
      <a
        href={link.url}
        {...(isExternal && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
      >
        {link.label}
      </a>
    </li>
  )
}

export default LinkItem
