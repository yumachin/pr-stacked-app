import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={viteLogo} className="logo" alt="" />
            <span className="plus">+</span>
            <img src={reactLogo} className="logo" alt="" />
            <span className="footer-title">Vite + React</span>
          </div>
          <p className="footer-tagline">
            モダンなフロントエンド開発のためのテンプレート
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#center">Home</a>
          <a href="#docs">Docs</a>
          <a href="#social">Community</a>
          <a href="#about">About</a>
        </nav>

        <div className="footer-external">
          <a
            href="https://vite.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Vite
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
          >
            React
          </a>
          <a
            href="https://github.com/vitejs/vite"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Vite + React. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
