import { useEffect, useState } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AmbientOrbs from './components/AmbientOrbs'

export default function App() {
  // Default: bright mode (false = bright, true = dark)
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark((prev) => !prev)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('in')
            }, i * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements.forEach((el) => observer.observe(el))

    const progressBar = document.getElementById('progress-bar')
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      if (progressBar) progressBar.style.width = progress + '%'
      setShowScrollTop(scrollTop > 300)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`theme-root relative min-h-screen font-dm overflow-x-hidden${isDark ? ' dark-mode' : ' bright-mode'}`}>
      <div id="progress-bar" style={{ width: '0%' }} />
      <div className="noise-overlay" />
      <Cursor isDark={isDark} />
      <AmbientOrbs isDark={isDark} />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
      <Footer isDark={isDark} />

      {/* Scroll-to-top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          border: 'none',
          cursor: 'none',
          background: '#2563eb',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isDark
            ? '0 4px 20px rgba(37,99,235,0.5)'
            : '0 4px 20px rgba(37,99,235,0.35)',
          zIndex: 9990,
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.8)',
          pointerEvents: showScrollTop ? 'auto' : 'none',
          transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.25s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'
          e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.55)'
          e.currentTarget.style.background = '#1d4ed8'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)'
          e.currentTarget.style.boxShadow = isDark
            ? '0 4px 20px rgba(37,99,235,0.5)'
            : '0 4px 20px rgba(37,99,235,0.35)'
          e.currentTarget.style.background = '#2563eb'
        }}
      >
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  )
}
