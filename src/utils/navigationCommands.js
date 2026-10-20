const commandAliases = {
  linkedin: 'linkedin',
  github: 'github',
  work: 'portfolio',
  'featured work': 'portfolio',
  portfolio: 'portfolio',
  resume: 'resume',
  'résumé': 'resume',
  email: 'email',
  contact: 'email',
}

export function resolveNavigationCommand(command, links) {
  // Normalize input once so aliases work regardless of case or surrounding spaces.
  const normalizedCommand = command.trim().toLowerCase()

  if (normalizedCommand === 'about:julian' || normalizedCommand === 'home') {
    return { type: 'home' }
  }

  const linkId = commandAliases[normalizedCommand]
  const link = links.find((item) => item.id === linkId)

  return link ? { type: 'link', link } : null
}
