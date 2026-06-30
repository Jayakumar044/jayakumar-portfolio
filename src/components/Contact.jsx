import SectionHeader from './SectionHeader'

export default function Contact({ isDark }) {
  const B = !isDark
  const primary    = B ? '#2563eb' : '#4f8bff'
  const emailBg    = B ? 'rgba(37,99,235,0.06)' : 'rgba(79,139,255,0.08)'
  const emailBdr   = B ? '1px solid rgba(37,99,235,0.20)' : '1px solid rgba(79,139,255,0.25)'
  const subClr     = B ? '#475569' : '#9ca3af'
  const noteClr    = B ? '#64748b' : '#6b7280'
  const sectionBg  = B ? 'rgba(240,246,255,0.55)' : 'rgba(255,255,255,0.007)'
  const glow1      = B ? 'rgba(37,99,235,0.09)' : 'rgba(79,139,255,0.12)'
  const glow2      = B ? 'rgba(99,102,241,0.07)' : 'rgba(168,85,247,0.1)'
  const headClr    = B ? '#0f172a' : 'white'

  return (
    <section id="contact" className="relative py-28 px-6" style={{ background: sectionBg }}>
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Contact" title="Let's connect" isDark={isDark} />
        <div className="reveal glass-card relative overflow-hidden p-10 md:p-16 text-center" style={{ animationDelay:'0.1s' }}>
          <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{ background:`radial-gradient(circle, ${glow1}, transparent 70%)` }} />
          <div className="absolute bottom-[-60px] right-[-40px] w-64 h-64 rounded-full pointer-events-none"
            style={{ background:`radial-gradient(circle, ${glow2}, transparent 70%)` }} />

          <div className="relative z-10">
            <h2 className="font-bebas tracking-widest mb-4"
              style={{ fontSize:'clamp(2.5rem, 8vw, 5rem)', lineHeight:'1', color: headClr }}>
              LET'S BUILD SOMETHING{' '}
              <span className="gradient-text" style={{ backgroundSize:'200% auto', display:'inline-block', animation:'gradShift 3s ease infinite, glowPulse 3s ease-in-out infinite' }}>
                MEANINGFUL
              </span>
              <br />TOGETHER
            </h2>
            <p className="font-roboto text-base md:text-xl mb-10 max-w-lg mx-auto leading-relaxed"
              style={{ color: subClr, fontFamily: B ? 'Inter, sans-serif' : undefined }}>
              Open to frontend roles, internships, and collaborative projects. I'd love to hear from you.
            </p>
            <a
              href="mailto:jayakumar04444@gmail.com"
              className="inline-flex items-center gap-2 sm:gap-4 px-4 sm:px-8 py-4 rounded-xl mb-10 font-bebas tracking-wider sm:tracking-widest text-sm sm:text-lg md:text-xl transition-all duration-300 break-all sm:break-normal"
              style={{ background: emailBg, border: emailBdr, color: primary, animation:'glowPulse 3s ease-in-out infinite', cursor:'none', maxWidth:'100%' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = B ? 'rgba(37,99,235,0.12)' : 'rgba(79,139,255,0.15)'
                e.currentTarget.style.boxShadow = B ? '0 0 28px rgba(37,99,235,0.22)' : '0 0 30px rgba(79,139,255,0.3)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = emailBg
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'none'
              }}
            >
              <span className="text-xl sm:text-2xl flex-shrink-0">📧</span>
              <span className="truncate sm:overflow-visible">JAYAKUMAR04444@GMAIL.COM</span>
            </a>
            <br />
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a href="mailto:jayakumar04444@gmail.com" className="btn-primary font-bebas tracking-widest text-xl px-10 py-4 w-full sm:w-auto">
                SEND MESSAGE
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <a href="https://github.com/Jayakumar044" target="_blank" rel="noopener noreferrer" className="btn-ghost font-bebas tracking-widest text-xl px-10 py-4 w-full sm:w-auto">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GITHUB
              </a>
            </div>
            <p className="font-roboto text-sm mt-10 tracking-widest uppercase" style={{ color: noteClr }}>
              Let's connect and build something impactful.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
