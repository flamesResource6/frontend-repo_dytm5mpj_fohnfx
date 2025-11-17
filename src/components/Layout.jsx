import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const linkBase = 'text-sm md:text-base text-gray-700 hover:text-rose-600 transition-colors px-3 py-2 rounded'
  const linkActive = 'text-rose-600'

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight text-xl">
            <span className="text-gray-900">yourname</span>
            <span className="text-rose-600">.portfolio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children ? children : <Outlet />}
      </main>

      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <a className="hover:text-rose-600 transition-colors" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <span className="text-gray-300">/</span>
            <a className="hover:text-rose-600 transition-colors" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="text-gray-300">/</span>
            <a className="hover:text-rose-600 transition-colors" href="mailto:you@example.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
