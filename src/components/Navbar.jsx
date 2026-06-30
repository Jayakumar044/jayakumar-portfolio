import { useState, useEffect } from 'react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = links.map((l) => document.getElementById(l.toLowerCase()))
      const scrollY = window.scrollY + 100
      sections.forEach((section) => {
        if (!section) return
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
          setActive(section.id.charAt(0).toUpperCase() + section.id.slice(1))
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  // ── Bright Mode: clean white frosted glass navbar (Pixelize style)
  // ── Dark Mode: original dark translucent
  const navBg = isDark
    ? (scrolled ? 'rgba(6,9,18,0.85)' : 'rgba(6,9,18,0.4)')
    : (scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.75)')
  const navBorder = scrolled
    ? (isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(148,163,184,0.20)')
    : '1px solid transparent'
  const linkColor   = isDark ? '#9ca3af' : '#475569'
  const linkActive  = isDark ? '#ffffff' : '#0f172a'
  const menuBg      = isDark ? 'rgba(6,9,18,0.97)' : 'rgba(255,255,255,0.98)'
  const hamburgerBg = isDark ? '#ffffff' : '#0f172a'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: navBg,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: navBorder,
        boxShadow: (!isDark && scrolled) ? '0 1px 12px rgba(37,99,235,0.07)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="font-bebas text-3xl tracking-widest gradient-text-static"
          style={{ cursor: 'none' }}
        >
          JK.
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`nav-link font-bebas tracking-widest text-lg transition-colors duration-300 ${active === link ? 'active' : ''}`}
                style={{ cursor: 'none', background: 'none', border: 'none', color: active === link ? linkActive : linkColor }}
              >
                {link.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Icon-only theme toggle (no text label) */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            style={{ cursor: 'none' }}
            title={isDark ? 'Switch to Bright Mode' : 'Switch to Dark Mode'}
          >
            <span className="theme-toggle-track">
              <span className="theme-toggle-thumb">
                {isDark ? '🌙' : '☀️'}
              </span>
            </span>
          </button>

          <a
            href="mailto:jayakumar04444@gmail.com"
            className="btn-primary font-bebas tracking-widest text-lg py-2 px-6"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn-mobile"
            style={{ cursor: 'pointer', color: isDark ? '#fff' : '#0f172a' }}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            className="flex flex-col gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ cursor: 'pointer', background: 'none', border: 'none' }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-[2px] rounded transition-all duration-300"
                style={{
                  background: hamburgerBg,
                  transform: i === 0 && menuOpen ? 'rotate(45deg) translateY(7px)'
                    : i === 2 && menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{ maxHeight: menuOpen ? '400px' : '0' }}
      >
        <div
          className="px-6 pb-6 flex flex-col gap-4"
          style={{
            background: menuBg,
            borderBottom: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(148,163,184,0.18)',
          }}
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left font-bebas text-xl tracking-widest transition-colors py-1"
              style={{ cursor: 'pointer', background: 'none', border: 'none', color: linkColor }}
            >
              {link.toUpperCase()}
            </button>
          ))}
          <a href="mailto:jayakumar04444@gmail.com" className="btn-primary font-bebas tracking-widest text-lg py-2 px-6 w-fit mt-2">
            HIRE ME
          </a>
        </div>
      </div>
    </nav>
  )
}
