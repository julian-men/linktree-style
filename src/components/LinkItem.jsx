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
        <img src={link.icon} alt="" aria-hidden="true" />
        {link.label}
      </a>
    </li>
  )
}

export default LinkItem
