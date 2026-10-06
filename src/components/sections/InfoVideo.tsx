import { useRef, useState } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function InfoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)
  const isMobile = useIsMobile()

  const toggleMute = () => {
    if (!videoRef.current) return
    const next = !muted
    videoRef.current.muted = next
    if (!next) videoRef.current.play()
    setMuted(next)
  }

  return (
    <section style={{
      background: '#000',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: isMobile ? '64px 16px' : '100px 48px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: isMobile ? '26px' : '36px',
    }}>
      {/* Eyebrow — parceiro internacional */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
        <span style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 300,
          fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
        }}>
          International Partner
        </span>
        <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
      </div>

      {/* Vídeo 16:9 — centrado */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1000px',
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        borderRadius: '4px',
        background: '#0a0a0a',
        lineHeight: 0,
      }}>
        <video
          ref={videoRef}
          src="/crossfit_gleis10.mp4"
          style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
          autoPlay muted loop playsInline
        />

        {/* Botão mute/unmute */}
        <button
          onClick={toggleMute}
          title={muted ? 'Ativar som' : 'Desativar som'}
          style={{
            position: 'absolute', bottom: '18px', right: '18px',
            background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '999px', width: '38px', height: '38px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', backdropFilter: 'blur(8px)', transition: 'border-color 0.3s',
            color: '#fff', zIndex: 10,
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
        >
          {muted ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
          )}
        </button>
      </div>

      {/* Legenda — cliente */}
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Bandeira da Suíça */}
          <svg width="22" height="22" viewBox="0 0 32 32" role="img" aria-label="Switzerland" style={{ borderRadius: '3px', flexShrink: 0, boxShadow: '0 0 0 1px rgba(255,255,255,0.12)' }}>
            <rect width="32" height="32" fill="#D52B1E" />
            <rect x="13" y="6.5" width="6" height="19" fill="#fff" />
            <rect x="6.5" y="13" width="19" height="6" fill="#fff" />
          </svg>
          <span style={{
            fontFamily: "'Delight', sans-serif", fontWeight: 700,
            fontSize: 'clamp(20px, 2.4vw, 28px)', letterSpacing: '0.04em',
            textTransform: 'uppercase', color: '#fff',
          }}>
            CrossFit Gleis 10
          </span>
        </div>
        <span style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 300,
          fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.45)',
        }}>
          Switzerland&rsquo;s largest CrossFit box
        </span>
      </div>
    </section>
  )
}
