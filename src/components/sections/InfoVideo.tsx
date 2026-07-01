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
      padding: isMobile ? '60px 16px' : '100px 48px',
      display: 'flex',
      justifyContent: 'center',
    }}>
      {/* Vídeo vertical 9:16 — centrado */}
      <div style={{
        position: 'relative',
        lineHeight: 0,
        flexShrink: 0,
        overflow: 'hidden',
        borderRadius: '4px',
        ...(isMobile
          ? { width: '100%', aspectRatio: '9 / 16' }
          : { height: 'min(78vh, 720px)', aspectRatio: '9 / 16' }
        ),
      }}>
        <video
          ref={videoRef}
          src="/tiago_info.mp4"
          style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
          autoPlay muted loop playsInline
        />

        {/* Botão mute/unmute */}
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
