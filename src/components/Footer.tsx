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
]

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
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Vite + React. All rights reserved.</p>
        <a href="#center" className="footer-back-to-top">
          Back to top
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
