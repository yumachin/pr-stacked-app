import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import './Header.css'

export function Header() {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-logo">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
          <span className="plus">+</span>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <span className="header-title">Vite + React</span>
        </div>

        <nav className="header-nav">
          <a href="#center">Home</a>
          <a href="#docs">Docs</a>
          <a href="#social">Community</a>
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