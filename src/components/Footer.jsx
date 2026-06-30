export default function Footer({ isDark }) {
  const year = new Date().getFullYear()
  const B = !isDark
  const borderClr   = B ? 'rgba(37,99,235,0.12)' : 'rgba(255,255,255,0.12)'
  const dividerGrad = B
    ? 'linear-gradient(90deg, transparent, rgba(37,99,235,0.4), rgba(99,102,241,0.4), transparent)'
    : 'linear-gradient(90deg, transparent, rgba(79,139,255,0.6), rgba(168,85,247,0.6), transparent)'
  const subClr      = B ? '#64748b' : '#6b7280'
  const copyClr     = B ? '#475569' : '#4b5563'
  const bottomClr   = B ? '#94a3b8' : '#374151'
  const pillBdr     = B ? 'rgba(37,99,235,0.16)' : 'rgba(255,255,255,0.1)'
  const pillClr     = B ? '#64748b' : '#6b7280'
  const pillHover   = B ? '#2563eb' : '#4f8bff'
  const footerBg    = B ? 'rgba(240,246,255,0.55)' : 'transparent'

  return (
    <footer className="relative z-10 py-8 px-6" style={{ borderTop:`1px solid ${borderClr}`, background: footerBg }}>
      <div className="max-w-6xl mx-auto">
        <div className="w-full h-px mb-8" style={{ background: dividerGrad }} />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-bebas tracking-widest text-3xl mb-1 gradient-text-static" style={{ animation:'fadeUp 0.8s ease both' }}>
              JAYAKUMAR S
            </div>
            <div className="font-bebas tracking-[0.2em] text-sm" style={{ color: subClr }}>FRONTEND DEVELOPER</div>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center font-bebas tracking-widest" style={{ animation:'fadeUp 0.8s 0.1s ease both' }}>
            {['React', 'Vite', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="text-xs px-4 py-1.5 rounded-full font-semibold glass transition-all duration-300"
                style={{ border:`1px solid ${pillBdr}`, color: pillClr, cursor:'none', boxShadow: B ? '0 1px 4px rgba(37,99,235,0.06)' : 'none' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = pillHover
                  e.currentTarget.style.color = pillHover
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = B ? '0 4px 12px rgba(37,99,235,0.15)' : 'none'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = pillBdr
                  e.currentTarget.style.color = pillClr
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = B ? '0 1px 4px rgba(37,99,235,0.06)' : 'none'
                }}
              >
                {tech.toUpperCase()}
              </span>
            ))}
          </div>
          <div className="font-roboto text-sm text-center md:text-right" style={{ color: copyClr, animation:'fadeUp 0.8s 0.2s ease both', fontFamily: B ? 'Inter, sans-serif' : undefined }}>
            <div className="mb-0.5">Designed & Developed by <span className="gradient-text-static font-bold">Jayakumar</span></div>
            <div>© {year} JAYAKUMAR. All rights reserved.</div>
          </div>
        </div>
        <div className="text-center mt-10">
          <div className="font-bebas tracking-[0.4em] text-[0.8rem] uppercase" style={{ color: bottomClr, animation:'fadeUp 1s 0.4s ease both' }}>
            Built with React • Vite • Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  )
}
