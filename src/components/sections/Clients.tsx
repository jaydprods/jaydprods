import { useNavigate } from 'react-router-dom'
import { useIsMobile } from '../../hooks/useIsMobile'

const clients = [
  'CrossFit Gleis 10',
  'Umpercento',
  'Acushla',
  'All-In Studio',
  'Hybrid Day',
  'Tiago Santos',
  'Festa da História',
  'Sould Il',
]

export default function Clients() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()

  return (
    <section className="bg-black border-t border-zinc-900" style={{ padding: isMobile ? '72px 20px' : '110px 48px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>

        {/* Eyebrow */}
        <p style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 300,
          fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)', marginBottom: isMobile ? '40px' : '56px',
        }}>
          Trusted by
        </p>

        {/* Nomes dos clientes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '28px 16px' : '48px 24px',
          marginBottom: isMobile ? '48px' : '64px',
        }}>
          {clients.map(name => (
            <span
              key={name}
              style={{
                fontFamily: "'Delight', sans-serif", fontWeight: 700,
                fontSize: isMobile ? '14px' : 'clamp(15px, 1.3vw, 19px)',
                letterSpacing: '0.04em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s ease',
                lineHeight: 1.3,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.95)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              {name}
            </span>
          ))}
        </div>

        {/* CTA — portfólio */}
        <button
          onClick={() => navigate('/work')}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            border: '1px solid rgba(255,255,255,0.25)', borderRadius: '999px',
            padding: '16px 40px', background: 'transparent', color: '#fff', cursor: 'pointer',
            fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 400,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            transition: 'border-color 0.3s, background 0.3s, color 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff' }}
        >
          View our work →
        </button>

      </div>
    </section>
  )
}
