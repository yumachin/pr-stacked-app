import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import './Header.css'

type HeaderProps = {
  onMenuToggle?: () => void
  menuOpen?: boolean
}

export function Header({ onMenuToggle, menuOpen = false }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-left">
          <button
            type="button"
            className="header-menu-btn"
            onClick={onMenuToggle}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
          <div className="header-logo">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
          <span className="plus">+</span>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <span className="header-title">Vite + React</span>
          </div>
        </div>

        <nav className="header-nav">
          <a href="#center">Home</a>
          <a href="#docs">Docs</a>
          <a href="#social">Community</a>
          <a href="#about">About</a>
        </nav>

        <div className="header-actions">
          <a
            href="https://github.com/vitejs/vite"
            target="_blank"
            rel="noreferrer"
            className="header-btn"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header