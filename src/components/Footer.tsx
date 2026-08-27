import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import './Footer.css'

const navLinks = [
  { href: '#center', label: 'Home' },
  { href: '#docs', label: 'Docs' },
  { href: '#social', label: 'Community' },
  { href: '#about', label: 'About' },
] as const

type ResourceLink = {
  href: string
  label: string
  icon?: string
}

const resourceLinks: ResourceLink[] = [
  { href: 'https://vite.dev/', label: 'Vite' },
  { href: 'https://react.dev/', label: 'React' },
  { href: 'https://github.com/vitejs/vite', label: 'GitHub', icon: 'github-icon' },
  { href: 'https://chat.vite.dev/', label: 'Discord', icon: 'discord-icon' },
  { href: 'https://x.com/vite_js', label: 'X.com', icon: 'x-icon' },
  { href: 'https://bsky.app/profile/vite.dev', label: 'Bluesky', icon: 'bluesky-icon' },
]

const socialLinks: ResourceLink[] = [
  { href: 'https://github.com/vitejs/vite', label: 'GitHub', icon: 'github-icon' },
  { href: 'https://chat.vite.dev/', label: 'Discord', icon: 'discord-icon' },
  { href: 'https://x.com/vite_js', label: 'X.com', icon: 'x-icon' },
  { href: 'https://bsky.app/profile/vite.dev', label: 'Bluesky', icon: 'bluesky-icon' },
]

const legalLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
  { href: '#', label: 'Contact' },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#center" className="footer-logo">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <span className="plus">+</span>
            <img src={reactLogo} className="logo" alt="React logo" />
            <span className="footer-title">Vite + React</span>
          </a>
          <p className="footer-tagline">
            フロントエンド開発のためのテンプレート
          </p>
          <div className="footer-social" aria-label="Social links">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="footer-social-link"
              >
                <svg role="presentation" aria-hidden="true">
                  <use href={`/icons.svg#${icon}`}></use>
                </svg>
              </a>
            ))}
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <h3 className="footer-heading">Navigation</h3>
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-external">
          <h3 className="footer-heading">Resources</h3>
          <ul>
            {resourceLinks.map(({ href, label, icon }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noreferrer">
                  {icon && (
                    <svg
                      className="footer-link-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href={`/icons.svg#${icon}`}></use>
                    </svg>
                  )}
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-legal">
          <h3 className="footer-heading">Legal</h3>
          <ul>
            {legalLinks.map(({ href, label }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Vite + React. All rights reserved.</p>
        <p className="footer-built-with">Built with React 19 &amp; Vite 8</p>
        <a href="#center" className="footer-back-to-top">
          Back to top
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
