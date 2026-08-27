import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import './About.css'

export function About() {
  return (
    <section id="about" className="about">
      <div className="about-header">
        <h2>About</h2>
        <p>
          Vite と React で構築されたモダンなフロントエンドアプリケーションです。
        </p>
      </div>

      <div className="about-grid">
        <article className="about-card">
          <img src={viteLogo} className="about-card-logo" alt="" />
          <h3>高速な開発体験</h3>
          <p>
            Vite の HMR により、コードを保存するたびに即座に変更が反映されます。
          </p>
        </article>

        <article className="about-card">
          <img src={reactLogo} className="about-card-logo react" alt="" />
          <h3>コンポーネントベース</h3>
          <p>
            React のコンポーネントモデルで、UI を再利用可能な部品として組み立てます。
          </p>
        </article>

        <article className="about-card">
          <svg className="about-card-icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h3>TypeScript 対応</h3>
          <p>
            型安全な開発環境により、バグを早期に発見し、保守性の高いコードを書けます。
          </p>
        </article>
      </div>

      <div className="about-tech">
        <h3>Tech Stack</h3>
        <ul>
          <li>React 19</li>
          <li>TypeScript</li>
          <li>Vite 8</li>
          <li>ESLint</li>
        </ul>
      </div>
    </section>
  )
}

export default About
