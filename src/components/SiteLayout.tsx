import { ArrowLeft, ArrowUpRight, BookOpen } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="The Chronicles home">
          <span className="brand-mark"><BookOpen size={18} strokeWidth={1.6} /></span>
          <span className="brand-copy"><span>The Chronicles</span><small>Indian Subcontinent</small></span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link className={isHome ? 'nav-link active' : 'nav-link'} to="/">Home</Link>
          <a className="nav-link" href={isHome ? '#eras' : '/#eras'}>The eras</a>
          <a className="nav-link nav-index" href={isHome ? '#about' : '/#about'}>About the registry</a>
        </nav>
        {!isHome && <Link className="back-link" to="/"><ArrowLeft size={15} /> <span>All eras</span></Link>}
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <Link className="footer-home" to="/">The Chronicles of the Indian Subcontinent</Link>
        <span>A growing historical registry <span className="footer-seal">✳</span></span>
        <a className="footer-top" href="#top">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  )
}
