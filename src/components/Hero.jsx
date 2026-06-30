import { useState, useEffect } from 'react'
import profileImg from '../assets/images/Profile.jpg'

const typedWords = ['Frontend Developer', 'React Specialist', 'UI Craftsman', 'Glass UI Builder']
const stackPills = ['⚛ React', '⚡ Vite', '🎨 Tailwind CSS', '🪟 Glass UI', '✨ Animations', '📱 Responsive']

export default function Hero({ isDark }) {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = typedWords[wordIndex]
    let timer
    if (!deleting) {
      if (charIndex < current.length) timer = setTimeout(() => setCharIndex(c => c + 1), 100)
      else timer = setTimeout(() => setDeleting(true), 2200)
    } else {
      if (charIndex > 0) timer = setTimeout(() => setCharIndex(c => c - 1), 60)
      else { setDeleting(false); setWordIndex(w => (w + 1) % typedWords.length) }
    }
    setDisplayText(typedWords[wordIndex].slice(0, charIndex))
    return () => clearTimeout(timer)
  }, [charIndex, deleting, wordIndex])

  // ── Bright mode tokens (Pixelize-inspired: navy text, blue accents)
  const B = !isDark
  const ringGrad   = B ? 'conic-gradient(from 0deg, #2563eb, #6366f1, #0ea5e9, #2563eb)' : 'conic-gradient(from 0deg, #4f8bff, #a855f7, #06b6d4, #4f8bff)'
  const hiText     = B ? '#0f172a' : 'white'
  const subColor   = B ? '#1e3a5f' : 'rgba(255,255,255,0.85)'
  const descColor  = B ? '#475569' : '#9ca3af'
  const emColor    = B ? '#0f172a' : '#e8eaf0'
  const headGrad   = B ? 'linear-gradient(135deg, #2563eb, #6366f1)' : 'linear-gradient(135deg, #4f8bff, #a855f7)'
  const badgeBg    = B ? 'rgba(37,99,235,0.08)' : 'rgba(79,139,255,0.08)'
  const badgeBdr   = B ? '1px solid rgba(37,99,235,0.22)' : '1px solid rgba(79,139,255,0.25)'
  const badgeClr   = B ? '#2563eb' : '#4f8bff'
  const pillClr    = B ? '#475569' : '#9ca3af'
  const pillBdr    = B ? 'rgba(37,99,235,0.16)' : 'rgba(255,255,255,0.1)'
  const pillBg     = B ? '#ffffff' : 'rgba(255,255,255,0.04)'
  const pillHover  = B ? 'linear-gradient(135deg,#2563eb,#6366f1)' : 'linear-gradient(135deg,#4f8bff,#a855f7)'
  const scrollGrad = B ? 'linear-gradient(to bottom, #2563eb, transparent)' : 'linear-gradient(to bottom, #4f8bff, transparent)'

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-16"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center" style={{ position: 'relative', zIndex: 1 }}>

        {/* Profile image */}
        <div className="relative mb-10" style={{ animation: 'profileFloat 6s ease-in-out infinite, fadeUp 1s ease both' }}>
          <div className="glass-image w-40 h-40 md:w-56 md:h-56 relative z-10 overflow-hidden">
            <img src={profileImg} alt="Jayakumar S" className="w-full h-full object-cover rounded-full" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background:'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)', animation:'shine 3s infinite', filter:'blur(5px)' }}
            />
          </div>
          <div
            className="absolute -inset-4 rounded-full opacity-20 blur-2xl z-0"
            style={{ background: ringGrad, animation:'spinSlow 10s linear infinite' }}
          />
          {/* Pixelize-style pulse ring (bright only) */}
          {B && (
            <div
              className="absolute inset-[-6px] rounded-full z-0"
              style={{ border:'2px solid rgba(37,99,235,0.18)', animation:'brightPulseRing 3s ease-in-out infinite' }}
            />
          )}
        </div>

        {/* Available badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-widest uppercase"
          style={{ background: badgeBg, border: badgeBdr, color: badgeClr, animation:'fadeUp 0.8s ease both',
            fontFamily: B ? 'Inter, DM Sans, sans-serif' : undefined,
          }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: badgeClr, animation:'badgePulse 2s ease-in-out infinite' }} />
          Available for Opportunities
        </div>

        {/* Name */}
        <h1
          className="font-bebas leading-none tracking-wider mb-4"
          style={{ fontSize:'clamp(3.5rem, 12vw, 9rem)', animation:'fadeUp 0.8s 0.1s ease both', opacity:0 }}
        >
          <span className="block mb-2" style={{ fontSize:'0.4em', letterSpacing:'0.2em', color: hiText }}>HI, I'M</span>
          <span className="block py-2">
            <span className="gradient-text text-3d" style={{ backgroundSize:'200% auto' }}>Jayakumar S</span>
          </span>
        </h1>

        {/* Typed */}
        <div
          className="font-bebas tracking-widest mb-6"
          style={{ fontSize:'clamp(1.4rem, 4vw, 2.5rem)', color: subColor, animation:'fadeUp 0.8s 0.2s ease both', opacity:0, minHeight:'2.5rem', textTransform:'uppercase' }}
        >
          {displayText}<span className="typed-cursor">|</span>
        </div>

        {/* Headline */}
        <p
          className="font-roboto font-bold text-lg md:text-2xl mb-6 max-w-2xl mx-auto leading-tight"
          style={{ animation:'fadeUp 0.8s 0.3s ease both', opacity:0 }}
        >
          <span className="gradient-text-static" style={{ display:'block' }}>
            Crafting immersive frontend experiences with modern web technologies
          </span>
        </p>

        {/* Tagline */}
        <p
          className="font-roboto text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed px-4"
          style={{ color: descColor, animation:'fadeUp 0.8s 0.4s ease both', opacity:0, fontFamily: B ? 'Inter, sans-serif' : undefined }}
        >
          Turning ideas into{' '}
          <em className="not-italic font-semibold" style={{ color: emColor }}>elegant, responsive,</em>{' '}
          and interactive web interfaces. Specializing in React, Glassmorphism, and Premium UI/UX.
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 px-2" style={{ animation:'fadeUp 0.8s 0.5s ease both', opacity:0 }}>
          {stackPills.map((pill, i) => (
            <div
              key={pill}
              className="group relative px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold overflow-hidden transition-all duration-300 hover:scale-110 glass"
              style={{
                border:`1px solid ${pillBdr}`,
                color: pillClr,
                background: pillBg,
                animationDelay:`${i * 0.05}s`,
                cursor:'none',
                fontFamily: B ? 'Inter, sans-serif' : undefined,
                boxShadow: B ? '0 1px 4px rgba(37,99,235,0.08)' : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = pillHover
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.borderColor = 'transparent'
                e.currentTarget.style.boxShadow = B ? '0 6px 20px rgba(37,99,235,0.25)' : '0 10px 20px rgba(79,139,255,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = pillBg
                e.currentTarget.style.color = pillClr
                e.currentTarget.style.borderColor = pillBdr
                e.currentTarget.style.boxShadow = B ? '0 1px 4px rgba(37,99,235,0.08)' : 'none'
              }}
            >
              {pill}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4" style={{ animation:'fadeUp 0.8s 0.6s ease both', opacity:0 }}>
          <a href="mailto:jayakumar04444@gmail.com" className="btn-primary font-bebas tracking-widest text-xl px-10 py-4 w-full sm:w-auto overflow-hidden group relative">
            <span className="relative z-10">HIRE ME NOW</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a href="/assets/resume/Jayakumar_Frontend_Developer.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost font-bebas tracking-widest text-lg px-8 py-4 w-full sm:w-auto">
            VIEW RESUME
          </a>
          <a
            href="#projects"
            className="btn-ghost font-bebas tracking-widest text-lg px-8 py-4 w-full sm:w-auto"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior:'smooth' }) }}
          >
            VIEW MY WORKS
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 rounded" style={{ background: scrollGrad, animation:'scrollHint 2s ease-in-out infinite' }} />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-32 left-10 w-32 h-32 rounded-full opacity-15 hidden lg:block"
        style={{ background: ringGrad, filter:'blur(40px)', animation:'float 6s ease-in-out infinite' }} />
      <div className="absolute bottom-32 right-10 w-24 h-24 rounded-full opacity-10 hidden lg:block"
        style={{ background: ringGrad, filter:'blur(30px)', animation:'float 8s ease-in-out infinite', animationDelay:'2s' }} />

      {/* Bright mode: soft blue section bg fade at bottom */}
      {B && (
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background:'linear-gradient(to bottom, transparent, rgba(240,246,255,0.6))' }} />
      )}
    </section>
  )
}
