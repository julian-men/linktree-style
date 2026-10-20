# Julian Mendoza - Personal Home Page

A personal links page styled as a small early Internet Explorer / Windows 95-era browser window. It presents Julian's profile, projects, résumé, and contact link in a responsive React page.

## Features

- Time-of-day greeting, running local clock, and local date
- Keyword-based address-bar navigation with accessible invalid-command feedback
- Reactive browser status bar for link previews and navigation feedback
- Five profile links with locally bundled image icons and résumé asset
- Responsive layout with keyboard-visible focus states

## Technology

- React
- Vite
- JavaScript
- Plain CSS

## Local setup

Clone the repository, enter the project directory, and install dependencies:

```bash
git clone https://github.com/julian-men/linktree-style.git
cd linktree-style
npm install
```

Start the development server:

```bash
npm run dev
```

Run the quality checks:

```bash
npm run lint
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Time-based feature

The page uses the visitor's local device time to show a morning, afternoon, or evening greeting. A one-second timer keeps the clock and date current and updates the greeting when the time period changes. The timer is cleaned up when the component unmounts so it does not continue running after the page leaves the screen.

This feature was chosen because a small personal homepage can feel more welcoming when it responds to the visitor's local context without requiring an account, stored data, or a complicated interaction.

## Address navigation and status feedback

The address bar accepts these commands and aliases:

- `about:julian` or `home`
- `linkedin`
- `github`
- `work`, `featured work`, or `portfolio`
- `resume` or `résumé`
- `email` or `contact`

Commands are trimmed and matched case-insensitively against the centralized link data. Invalid commands stay on the page, show an inline accessible error, and update the visual browser status bar. The status bar also previews links on hover and keyboard focus, then returns to `Ready` after the interaction ends.

## Accessibility

The page uses semantic headings, lists, links, form labels, and an accessible live region for address errors and greeting changes. Decorative browser chrome and link icons are hidden from assistive technology. Real links and form controls are keyboard reachable with visible focus styling, and external links use safe new-tab attributes.

## What I’d improve with more time

- Add more browser controls while keeping decorative controls clearly separate from real interactions
- Add automated component and command-resolution tests
- Create a custom social-sharing preview after deployment metadata is available

## Deployment

GitHub Pages deployment will be added next. The site does not have a verified live URL yet.
