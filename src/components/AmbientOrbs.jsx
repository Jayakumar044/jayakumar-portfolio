export default function AmbientOrbs({ isDark }) {
  if (isDark) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full" style={{ width:'600px', height:'600px', top:'-200px', right:'-150px', background:'rgba(79,139,255,0.10)', filter:'blur(120px)', animation:'float 8s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width:'500px', height:'500px', bottom:'-150px', left:'-100px', background:'rgba(168,85,247,0.09)', filter:'blur(120px)', animation:'float 10s ease-in-out infinite', animationDelay:'3s' }} />
        <div className="absolute rounded-full" style={{ width:'350px', height:'350px', top:'40%', left:'45%', background:'rgba(6,182,212,0.07)', filter:'blur(100px)', animation:'float 7s ease-in-out infinite', animationDelay:'5s' }} />
        <div className="absolute inset-0" style={{ backgroundImage:`linear-gradient(rgba(79,139,255,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(79,139,255,0.03) 1px, transparent 1px)`, backgroundSize:'60px 60px' }} />
      </div>
    )
  }

  // Bright mode: very soft blue orbs — Pixelize-style clean look
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Large top-right blue glow */}
      <div className="absolute rounded-full" style={{
        width:'700px', height:'700px', top:'-250px', right:'-200px',
        background:'rgba(37,99,235,0.07)',
        filter:'blur(140px)',
        animation:'float 10s ease-in-out infinite',
      }} />
      {/* Bottom-left indigo glow */}
      <div className="absolute rounded-full" style={{
        width:'600px', height:'600px', bottom:'-200px', left:'-180px',
        background:'rgba(99,102,241,0.06)',
        filter:'blur(140px)',
        animation:'float 12s ease-in-out infinite',
        animationDelay:'4s',
      }} />
      {/* Center sky blue */}
      <div className="absolute rounded-full" style={{
        width:'400px', height:'400px', top:'35%', left:'38%',
        background:'rgba(14,165,233,0.05)',
        filter:'blur(120px)',
        animation:'float 8s ease-in-out infinite',
        animationDelay:'2s',
      }} />
    </div>
  )
}
