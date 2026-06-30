export default function SectionHeader({ label, title, subtitle, isDark }) {
  const B = !isDark
  const labelClr  = B ? '#2563eb' : 'var(--primary)'
  const titleClr  = B ? '#0f172a' : 'white'
  const subClr    = B ? '#475569' : '#9ca3af'

  return (
    <div className="mb-12">
      {label && (
        <div className="mb-2 font-bebas tracking-[0.3em] text-sm uppercase opacity-90"
          style={{ color: labelClr, fontFamily: B ? 'Inter, DM Sans, sans-serif' : undefined }}>
          {label}
        </div>
      )}
      <h2
        className="font-bebas tracking-wider text-3d mb-4"
        style={{ fontSize:'clamp(2.5rem, 8vw, 4.5rem)', lineHeight:'1.05', color: titleClr }}
      >
        {title}
      </h2>
      <div className="section-divider mb-4" />
      {subtitle && (
        <p className="font-roboto text-base md:text-lg max-w-xl leading-relaxed"
          style={{ color: subClr, fontFamily: B ? 'Inter, sans-serif' : undefined }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
