function LinkCard({ link }) {
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
        <span>{link.label}</span>
        <span>{link.description}</span>
      </a>
    </li>
  )
}

export default LinkCard
