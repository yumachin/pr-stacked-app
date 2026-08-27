import './Sidebar.css'

type SidebarProps = {
  open: boolean
  onClose: () => void
}

const menuLinks = [
  { href: '#center', label: 'Home', icon: 'documentation-icon' },
  { href: '#docs', label: 'Docs', icon: 'documentation-icon' },
  { href: '#social', label: 'Community', icon: 'social-icon' },
  { href: '#about', label: 'About', icon: 'documentation-icon' },
] as const

const quickLinks = [
  { href: '#center', label: 'Getting Started' },
  { href: '#docs', label: 'Documentation' },
  { href: '#about', label: 'Tech Stack' },
] as const

const externalLinks: { href: string; label: string; icon?: string }[] = [
  { href: 'https://vite.dev/', label: 'Vite Docs' },
  { href: 'https://react.dev/', label: 'React Docs' },
  { href: 'https://github.com/vitejs/vite', label: 'GitHub', icon: 'github-icon' },
]

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={`sidebar-backdrop${open ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`app-sidebar${open ? ' open' : ''}`} aria-label="Sidebar">
        <div className="sidebar-section">
          <h2 className="sidebar-heading">Menu</h2>
          <ul className="sidebar-list">
            {menuLinks.map(({ href, label, icon }) => (
              <li key={href}>
                <a href={href} className="sidebar-link" onClick={onClose}>
                  <svg role="presentation" aria-hidden="true">
                    <use href={`/icons.svg#${icon}`}></use>
                  </svg>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <h2 className="sidebar-heading">Quick Links</h2>
          <ul className="sidebar-list">
            {quickLinks.map(({ href, label }) => (
              <li key={label}>
                <a href={href} className="sidebar-link sidebar-link-plain" onClick={onClose}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <h2 className="sidebar-heading">External</h2>
          <ul className="sidebar-list">
            {externalLinks.map(({ href, label, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="sidebar-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon && (
                    <svg role="presentation" aria-hidden="true">
                      <use href={`/icons.svg#${icon}`}></use>
                    </svg>
                  )}
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-footer">
          <p>v0.0.0</p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
