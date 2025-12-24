// SATVertex/SATVertex-portfolio/src/components/Layout.jsx

import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/SATVertexlogo1.jpeg'

function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/blog', label: 'Blog' },
    { to: '/experience', label: 'Experience' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      {/* Optional global background image layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_#4c1d95_0,_transparent_55%),radial-gradient(circle_at_bottom,_#0f766e_0,_transparent_55%)] opacity-40"
      />

      {/* Navbar */}
      <nav className="relative z-20 backdrop-blur bg-[#050816]/85 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="SATVertex"
                className="h-8 w-8 object-contain"
              />
              <span className="text-lg font-semibold tracking-tight text-slate-50">
                SATVertex
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`transition ${
                    location.pathname === item.to
                      ? 'text-teal-300 border-b-2 border-teal-300 pb-1'
                      : 'text-slate-300 hover:text-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-200"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileOpen && (
            <div className="md:hidden mt-4 space-y-2 pb-3">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-sm transition ${
                    location.pathname === item.to
                      ? 'text-teal-300 font-semibold'
                      : 'text-slate-300 hover:text-slate-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-10 text-center text-sm text-slate-400">
          <p>&copy; 2025 SATVertex. Built with React and custom APIs.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
