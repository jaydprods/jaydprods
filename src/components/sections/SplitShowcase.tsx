import { useRef, useState } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function SplitShowcase() {
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
    <section id="welcome" style={{
      width: '100%',
      background: '#000',
      marginTop: '72px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      lineHeight: 0,
    }}>

      {/* Vídeo vertical 9:16 — sem cortes */}
      <div style={{
        position: 'relative',
        lineHeight: 0,
        flexShrink: 0,
        overflow: 'hidden',
        ...(isMobile
          ? { width: '100%', aspectRatio: '9 / 16' }
          : { height: 'min(82vh, 760px)', aspectRatio: '9 / 16' }
        ),
      }}>
        <video
          ref={videoRef}
          src="/hero_clinica.mp4"
          style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
          autoPlay muted loop playsInline
        />

        {/* Gradiente subtil no fundo para o texto ser legível */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 45%)',
          pointerEvents: 'none',
        }} />

        {/* Featured Work — overlay canto inferior esquerdo */}
        <div style={{
          position: 'absolute',
          bottom: '28px',
          left: '28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '6px',
          lineHeight: 1.2,
        }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: '9px',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
          }}>
            Featured Work
          </span>
          <div style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: '12px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.9)',
          }}>
            #BTS Publicidade
          </span>
        </div>

        {/* Botão mute/unmute — canto inferior direito */}
        <button
          onClick={toggleMute}
          title={muted ? 'Ativar som' : 'Desativar som'}
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            background: 'rgba(0,0,0,0.45)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '999px',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            transition: 'border-color 0.3s',
            color: '#fff',
            zIndex: 10,
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

    </section>
  )
}
