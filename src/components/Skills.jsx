import { useState, useRef, useEffect, useCallback } from 'react'
import SectionHeader from './SectionHeader'

// Detect mobile viewport
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= breakpoint)
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= breakpoint)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [breakpoint])
  return isMobile
}

// Import images
import htmlIcon from '../assets/images/html.png'
import cssIcon from '../assets/images/css.png'
import jsIcon from '../assets/images/javascript.png'
import reactIcon from '../assets/images/reactJS.png'
import tailwindIcon from '../assets/images/tailwindcss.png'
import bootstrapIcon from '../assets/images/bootstrap.png'
import gitIcon from '../assets/images/git.png'
import githubIcon from '../assets/images/github.png'

const allSkills = [
  // Core Technologies
  { icon: htmlIcon, name: 'HTML5', subtitle: 'Structure', color: '#E34F26', level: 'Master' },
  { icon: cssIcon, name: 'CSS3', subtitle: 'Styling', color: '#1572B6', level: 'Expert' },
  { icon: bootstrapIcon, name: 'Bootstrap', subtitle: 'Framework', color: '#7952B3', level: 'Advanced' },
  { icon: jsIcon, name: 'JavaScript', subtitle: 'Logic', color: '#F7DF1E', level: 'Expert' },
  { icon: reactIcon, name: 'React.js', subtitle: 'Library', color: '#61DAFB', level: 'Expert' },
  { icon: tailwindIcon, name: 'Tailwind', subtitle: 'Utility CSS', color: '#06B6D4', level: 'Expert' },
  // Tools & Workflow
  { icon: gitIcon, name: 'Git', subtitle: 'Version Control', color: '#F05032', level: 'Advanced' },
  { icon: githubIcon, name: 'GitHub', subtitle: 'Collaboration', color: '#4078c0', level: 'Pro' },
  { icon: '📦', name: 'NPM', subtitle: 'Package Mgr', color: '#CB3837', level: 'Advanced' },
  { icon: '💻', name: 'VS Code', subtitle: 'IDE', color: '#007ACC', level: 'Expert' },
]

function CoverflowCarousel({ skills }) {
  const total = skills.length
  const middleIdx = Math.floor((total - 1) / 2)
  const [selectedIndex, setSelectedIndex] = useState(middleIdx)
  const [hoverIndex, setHoverIndex] = useState(null)
  const [mouseOffset, setMouseOffset] = useState(0)
  const [isSelecting, setIsSelecting] = useState(false)
  const containerRef = useRef(null)
  const isMobile = useIsMobile(768)

  const CARD_SPREAD = 48
  const CARD_BASE_X = 175

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const relX = e.clientX - centerX
    const normalized = relX / (rect.width / 2)
    setMouseOffset(normalized * 45)
  }

  const handleContainerLeave = () => {
    setMouseOffset(0)
  }

  const handleCardClick = (i) => {
    setIsSelecting(true)
    setSelectedIndex(i)
    setTimeout(() => setIsSelecting(false), 1600)
  }

  // Auto-rotate: advance every 1 second, pause on hover or click
  useEffect(() => {
    if (hoverIndex !== null || isSelecting) return
    const interval = setInterval(() => {
      setSelectedIndex(prev => (prev + 1) % total)
    }, 1000)
    return () => clearInterval(interval)
  }, [hoverIndex, isSelecting, total])

  // ─── Mobile: flat grid layout ───
  if (isMobile) {
    return (
      <div className="mobile-skills-grid">
        {skills.map((skill) => {
          const isEmoji = typeof skill.icon === 'string' && skill.icon.length < 5
          return (
            <div
              key={skill.name}
              className="mobile-skill-card"
              style={{ '--card-color': skill.color }}
            >
              <div className="mobile-skill-icon">
                {isEmoji ? (
                  <span style={{ fontSize: '2.5rem' }}>{skill.icon}</span>
                ) : (
                  <img src={skill.icon} alt={skill.name} style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                )}
              </div>
              <div className="mobile-skill-name">{skill.name}</div>
              <div className="mobile-skill-subtitle">{skill.subtitle}</div>
              <div className="mobile-skill-badge">{skill.level}</div>
            </div>
          )
        })}
      </div>
    )
  }

  // ─── Desktop: 3D Coverflow ───
  return (
    <div
      ref={containerRef}
      className="orbital-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleContainerLeave}
    >
      <div className="orbital-core-glow" />

      <div className="orbital-inner">
        {skills.map((skill, i) => {
          const isSelected = selectedIndex === i
          const isHovered = hoverIndex === i

          const diff = i - selectedIndex
          const dir = diff > 0 ? 1 : -1
          const absDiff = Math.abs(diff)

          // 3D Position calculation
          let translateX, translateZ, rotateY, scale, hoverY


          if (diff === 0) {
            translateX = 0
            translateZ = 240
            rotateY = 0
            scale = 1.05
            hoverY = 0
          } else {
            translateX = dir * (CARD_BASE_X + (absDiff - 1) * CARD_SPREAD)
            translateZ = -(absDiff * 85)
            rotateY = dir * -42
            scale = 1
            // Subtle hover lift on side cards
            hoverY = isHovered ? -10 : 0
          }

          // Mouse offset shifts entire deck (center card moves less, side cards more)
          const parallaxFactor = diff === 0 ? 0.3 : 1 + absDiff * 0.15
          const finalX = translateX + mouseOffset * parallaxFactor

          const itemTransform = `translateX(${finalX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) translateY(${hoverY}px) scale(${scale})`

          // Inline border + glow (avoid CSS class override issues)
          let borderColor = 'rgba(255,255,255,0.08)'
          let boxShadow = '0 10px 40px rgba(0,0,0,0.4)'

          if (isSelected) {
            borderColor = skill.color
            boxShadow = `0 18px 55px ${skill.color}44, 0 0 35px ${skill.color}22`
          } else if (isHovered) {
            borderColor = `${skill.color}88`
            boxShadow = `0 15px 50px rgba(0,0,0,0.5), 0 0 18px ${skill.color}33`
          }

          const isEmoji = typeof skill.icon === 'string' && skill.icon.length < 5

          return (
            <div
              key={skill.name}
              className="orbital-item"
              style={{
                transform: itemTransform,
                zIndex: isSelected ? 1000 : 100 - absDiff,
              }}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => handleCardClick(i)}
            >
              <div
                className="orbital-card"
                style={{
                  '--card-bg': skill.color + '22',
                  borderColor,
                  boxShadow,
                  transition: isSelecting
                    ? 'all 1.5s cubic-bezier(0.2, 1, 0.3, 1)'
                    : 'box-shadow 0.6s ease, border-color 0.6s ease',
                }}
              >
                <div className="orbital-card-header">
                  <div className="orbital-card-title">{skill.name}</div>
                  <div className="orbital-card-subtitle">{skill.subtitle}</div>
                </div>

                <div className="pop-out-icon-container">
                  {isEmoji ? (
                    <span className="orbital-card-emoji">{skill.icon}</span>
                  ) : (
                    <img src={skill.icon} alt={skill.name} className="orbital-card-icon" />
                  )}
                </div>

                <div className="orbital-card-badge">
                  <span>{skill.level}</span>
                </div>

                <div
                  className="absolute inset-0 rounded-[20px] pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${skill.color}18 0%, transparent 70%)` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function CategoryTitle({ children }) {
  return (
    <div className="reveal flex items-center justify-center gap-2 md:gap-4 mb-10 md:mb-16">
      <div className="hidden sm:block w-12 md:w-32 h-px bg-gradient-to-r from-transparent to-primary/40" />
      <span className="font-bebas text-xl md:text-3xl tracking-[0.2em] md:tracking-[0.5em] text-primary whitespace-nowrap">{children}</span>
      <div className="hidden sm:block w-12 md:w-32 h-px bg-gradient-to-l from-transparent to-primary/40" />
    </div>
  )
}

export default function Skills({ isDark }) {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Marquee strip */}
      <div
        className={`absolute top-0 left-0 right-0 overflow-hidden py-4 glass group transition-all duration-700 ease-in-out ${!isDark ? 'hover:bg-[#2563eb]' : ''}`}
        style={{
          borderBottom: '1px solid rgba(79,139,255,0.2)',
          boxShadow: '0 4px 30px rgba(0,0,0,0.5)',
          background: isDark ? 'rgba(6,9,18,0.6)' : 'rgba(255,255,255,0.05)',
        }}
        onMouseEnter={(e) => {
          if (!isDark) e.currentTarget.style.background = '#2563eb'
        }}
        onMouseLeave={(e) => {
          if (!isDark) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
        }}
      >
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 25s linear infinite' }}>
          {Array(8)
            .fill(['React', 'Vite', 'Tailwind', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'GitHub', 'NPM'])
            .flat()
            .map((item, i) => (
              <span
                key={i}
                className={`font-bebas text-sm tracking-[0.3em] uppercase mx-10 flex items-center gap-3 transition-colors duration-500 ${
                  isDark ? 'text-white/40' : 'text-gray-500 group-hover:text-white'
                }`}
              >
                {item} <span className={`text-primary text-xl transition-colors duration-500 ${!isDark ? 'group-hover:text-white' : ''}`}>✦</span>
              </span>
            ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16">
        <SectionHeader
          label="The Lab"
          title="Dynamic Skillset"
          subtitle="Experience the interactive stack of technologies and tools I've mastered."
          isDark={isDark}
        />

        {/* Wave title */}
        <div className="reveal mb-12 md:mb-24 text-center px-4">
          <div className="font-bebas text-3xl md:text-6xl tracking-wide md:tracking-widest">
            {['T', 'e', 'c', 'h', 'n', 'i', 'c', 'a', 'l', ' ', 'S', 'k', 'i', 'l', 'l', 's', 'e', 't'].map(
              (char, i) => (
                <span
                  key={i}
                  className="inline-block"
                  style={{
                    color: char === ' ' ? 'transparent' : undefined,
                    width: char === ' ' ? '0.4em' : undefined,
                    background: 'linear-gradient(135deg, #4f8bff, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: `wave 2s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              )
            )}
          </div>
        </div>

        <div className="reveal">
          <CategoryTitle>CORE STACK & TOOLING</CategoryTitle>
          <CoverflowCarousel skills={allSkills} />

          {/* Micro copy card */}
          <div className="mt-16 md:mt-32 flex justify-center px-4">
            <div
              className="max-w-2xl rounded-[24px] md:rounded-[32px] p-6 md:p-10 flex items-center justify-center text-center glass border-dashed"
              style={{
                background: 'rgba(79,139,255,0.03)',
                borderColor: 'rgba(79,139,255,0.2)',
              }}
            >
              <p className="font-roboto text-base md:text-lg text-gray-400 italic leading-relaxed">
                Continuously evolving and pushing the boundaries of <br className="hidden md:block" />
                <span className="gradient-text-static font-bold not-italic text-2xl md:text-3xl tracking-tight">MODERN WEB EXCELLENCE.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
