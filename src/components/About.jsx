import SectionHeader from './SectionHeader'

const tags = ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)', 'UI Animations', 'Glassmorphism', 'Dark Mode', 'Responsive Design']

export default function About({ isDark }) {
  const B = !isDark
  const grad       = B ? 'linear-gradient(135deg, #2563eb, #6366f1, #0ea5e9)' : 'linear-gradient(135deg, #4f8bff, #a855f7, #06b6d4)'
  const conicGrad  = B ? 'conic-gradient(from 0deg, #2563eb, #6366f1, #0ea5e9, #2563eb)' : 'conic-gradient(from 0deg, #4f8bff, #a855f7, #06b6d4, #4f8bff)'
  const innerBg    = B ? 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(99,102,241,0.08))' : 'linear-gradient(135deg, rgba(79,139,255,0.12), rgba(168,85,247,0.12))'
  const cardInner  = B ? '#f0f6ff' : '#0d1321'
  const subClr     = B ? '#475569' : '#9ca3af'
  const statusBg   = B ? 'rgba(37,99,235,0.08)' : 'rgba(79,139,255,0.12)'
  const statusBdr  = B ? '1px solid rgba(37,99,235,0.22)' : '1px solid rgba(79,139,255,0.3)'
  const statusClr  = B ? '#2563eb' : '#4f8bff'
  const bioClr     = B ? '#475569' : '#9ca3af'
  const quoteClr   = B ? '#0f172a' : '#d1d5db'
  const tagBdr     = B ? 'rgba(37,99,235,0.16)' : 'rgba(255,255,255,0.1)'
  const tagClr     = B ? '#64748b' : '#6b7280'
  const tagHoverC  = B ? '#2563eb' : '#4f8bff'
  const titleClr   = B ? '#0f172a' : 'white'
  const devSubClr  = B ? '#2563eb' : '#9ca3af'

  return (
    <section
      id="about"
      className="relative py-28 px-6"
      style={{ background: B ? 'rgba(240,246,255,0.50)' : 'transparent' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Avatar */}
          <div className="reveal-left order-2 lg:order-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-[-2px] rounded-[1.75rem]"
                style={{ background: grad, filter:'blur(20px)', opacity: B ? 0.18 : 0.25, animation:'float 6s ease-in-out infinite', borderRadius:'1.75rem' }} />
              <div className="absolute inset-0 rounded-[1.5rem]"
                style={{ background: conicGrad, padding:'2px', animation:'spinSlow 8s linear infinite', borderRadius:'1.5rem' }}>
                <div className="w-full h-full rounded-[1.4rem]" style={{ background: cardInner }} />
              </div>
              <div className="absolute inset-[3px] rounded-[1.4rem] flex items-center justify-center"
                style={{ background: innerBg, backdropFilter:'blur(10px)' }}>
                <div className="text-center">
                  <div className="font-bebas tracking-widest gradient-text-static" style={{ fontSize:'6rem', lineHeight:1 }}>JK</div>
                  <div className="font-bebas tracking-[0.3em] uppercase mt-2" style={{ color: devSubClr, fontSize:'0.85rem' }}>Frontend Dev</div>
                  <div className="mt-4 mx-auto inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bebas tracking-widest"
                    style={{ background: statusBg, border: statusBdr, color: statusClr }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: statusClr, animation:'badgePulse 2s infinite' }} />
                    OPEN TO WORK
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right order-1 lg:order-2">
            <SectionHeader label="About" title="Pixels & Performance Specialist" isDark={isDark} />
            <p className="font-bebas text-2xl md:text-4xl mb-6 leading-tight tracking-wider"
              style={{ animation:'glowPulse 3s ease-in-out infinite', color: titleClr }}>
              I don't just build websites —{' '}
              <span className="gradient-text-static">I DESIGN EXPERIENCES.</span>
            </p>
            <p className="font-roboto leading-relaxed mb-4 text-[1rem]"
              style={{ color: bioClr, fontFamily: B ? 'Inter, sans-serif' : undefined }}>
              I'm a passionate Frontend Developer who enjoys building interactive and visually rich user interfaces.
              I love working on modern UI trends like glassmorphism, dark mode interfaces, hover lighting effects, and smooth transitions.
            </p>
            <p className="font-roboto leading-relaxed mb-4 text-[1rem]"
              style={{ color: bioClr, fontFamily: B ? 'Inter, sans-serif' : undefined }}>
              My goal is to write clean, scalable code while delivering a polished user experience across all devices.
              I'm constantly learning, improving my design sense, and exploring new frontend technologies.
            </p>
            <p className="font-roboto leading-relaxed mb-6 text-[1rem] font-bold italic"
              style={{ color: quoteClr, animation:'slideInLeft 0.8s 0.3s ease both' }}>
              Clean code, smooth animations, and pixel-perfect layouts.
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={tag}
                  className="font-bebas tracking-widest text-xs px-4 py-2 rounded-md transition-all duration-300 glass"
                  style={{
                    border:`1px solid ${tagBdr}`,
                    color: tagClr,
                    cursor:'none',
                    animationDelay:`${i * 0.05}s`,
                    fontFamily: B ? 'Inter, sans-serif' : undefined,
                    boxShadow: B ? '0 1px 4px rgba(37,99,235,0.06)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = tagHoverC
                    e.currentTarget.style.color = tagHoverC
                    e.currentTarget.style.transform = 'scale(1.08)'
                    e.currentTarget.style.boxShadow = B ? '0 4px 12px rgba(37,99,235,0.15)' : 'none'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = tagBdr
                    e.currentTarget.style.color = tagClr
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = B ? '0 1px 4px rgba(37,99,235,0.06)' : 'none'
                  }}
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
