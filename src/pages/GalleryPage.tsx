import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import JSZip from 'jszip'
import { useIsMobile } from '../hooks/useIsMobile'
import { useScrollLock } from '../hooks/useScrollLock'
import { bragancaPhotos } from '../data/braganca'

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const SLUG        = 'feira-medieval-braganca'
const BASE        = `/galleries/${SLUG}`
const INSTAGRAM   = 'https://www.instagram.com/jaydprods/'
const UNLOCK_KEY  = `unlocked:${SLUG}`
const TITLE       = 'Festa da História'
const SUBTITLE    = 'Bragança 2026'

const photos = bragancaPhotos

const previewUrl = (name: string) => `${BASE}/preview/${name}`
const fullUrl    = (name: string) => `${BASE}/full/${name}`

// Descarrega um único ficheiro a partir de um blob (contorna o bloqueio de <a download> cross-usage)
async function downloadOne(name: string) {
  const res  = await fetch(fullUrl(name))
  const blob = await res.blob()
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href = url
  a.download = name
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
function Lightbox({ index, onClose, onDownload }: { index: number; onClose: () => void; onDownload: (name: string) => void }) {
  const [current, setCurrent] = useState(index)
  const total = photos.length
  const isMobile = useIsMobile()
  const [hiRes, setHiRes] = useState(false)

  // Reset do estado de alta-resolução sempre que muda de foto
  useEffect(() => { setHiRes(false) }, [current])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  setCurrent(c => (c - 1 + total) % total)
      if (e.key === 'ArrowRight') setCurrent(c => (c + 1) % total)
      if (e.key === 'Escape')     onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [total, onClose])

  const maxH = isMobile ? 'calc(100vh - 32px)' : 'calc(100vh - 128px)'

  const arrowBtn: React.CSSProperties = {
    position: 'fixed', top: '50%', transform: 'translateY(-50%)',
    background: 'none', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%',
    width: isMobile ? '38px' : '44px', height: isMobile ? '38px' : '44px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'rgba(255,255,255,0.7)', fontSize: '18px', cursor: 'pointer',
    transition: 'border-color 0.2s, color 0.2s', zIndex: 1001,
  }

  const name = photos[current].name

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.93)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '16px' : '64px', cursor: 'zoom-out' }}
    >
      {/* Preview como placeholder instantâneo + original 4K por cima */}
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '100%', maxHeight: maxH, lineHeight: 0 }}>
        <img
          key={`prev-${current}`}
          src={previewUrl(name)}
          alt=""
          draggable={false}
          style={{ display: 'block', maxWidth: '100%', maxHeight: maxH, objectFit: 'contain' }}
        />
        <img
          key={`full-${current}`}
          src={fullUrl(name)}
          alt=""
          draggable={false}
          onLoad={() => setHiRes(true)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', opacity: hiRes ? 1 : 0, transition: 'opacity 0.35s ease' }}
        />
      </div>

      <button onClick={e => { e.stopPropagation(); setCurrent(c => (c - 1 + total) % total) }} style={{ ...arrowBtn, left: isMobile ? '8px' : '24px' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}>←</button>
      <button onClick={e => { e.stopPropagation(); setCurrent(c => (c + 1) % total) }} style={{ ...arrowBtn, right: isMobile ? '8px' : '24px' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}>→</button>

      {/* Barra inferior — contador + download */}
      <div onClick={e => e.stopPropagation()} style={{ position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '20px', zIndex: 1001 }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}>
          {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <button
          onClick={() => onDownload(name)}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: '#000', border: 'none', borderRadius: '999px', padding: '10px 22px', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}
        >
          ↓ Download
        </button>
      </div>

      <button onClick={onClose} style={{ position: 'fixed', top: '20px', right: '24px', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '24px', cursor: 'pointer', lineHeight: 1, zIndex: 1001 }}>✕</button>
    </motion.div>
  )
}

// ─── GATE INSTAGRAM ───────────────────────────────────────────────────────────
function InstagramGate({ onUnlock }: { onUnlock: () => void }) {
  const isMobile = useIsMobile()
  const [followed, setFollowed] = useState(false)

  // Overlay sempre visível (opacity 1) — não depende de RAF/framer para aparecer.
  // A entrada é feita por animação CSS, que corre mesmo com o separador em segundo plano.
  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', animation: 'gateFadeIn 0.3s ease both' } as React.CSSProperties}
    >
      <style>{`@keyframes gateFadeIn { from { opacity: 0 } to { opacity: 1 } } @keyframes gateRise { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: translateY(0) } }`}</style>
      <div
        style={{ maxWidth: '420px', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(10,10,10,0.92)', borderRadius: '8px', padding: isMobile ? '40px 28px' : '52px 44px', animation: 'gateRise 0.4s ease 0.05s both' }}
      >
        {/* Ícone Instagram */}
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 style={{ fontFamily: "'Delight', sans-serif", fontWeight: 700, fontSize: '26px', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#fff', margin: 0 }}>
            Download Gratuito
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
            Segue <strong style={{ color: '#fff', fontWeight: 500 }}>@jaydprods</strong> no Instagram para desbloquear o download das fotos da {TITLE} de {SUBTITLE.replace('Bragança ', 'Bragança, ')}.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '12px', lineHeight: 1.6, color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            E não te esqueças de identificar <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>@jaydprods</strong> quando publicares as fotos. 🖤
          </p>
        </div>

        {/* Passo 1 — seguir */}
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setFollowed(true)}
          style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', border: 'none', borderRadius: '999px', padding: '16px', background: '#fff', color: '#000', textDecoration: 'none', fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}
        >
          Seguir no Instagram
        </a>

        {/* Passo 2 — confirmar (aparece após clicarem em seguir) */}
        {followed && (
          <button
            onClick={onUnlock}
            style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '999px', padding: '16px', background: 'transparent', color: '#fff', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', animation: 'gateFadeIn 0.3s ease both' }}
          >
            ✓ Já segui — desbloquear
          </button>
        )}

      </div>
    </div>
  )
}

// ─── PÁGINA ───────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()

  const [unlocked, setUnlocked]   = useState(false)
  const [selecting, setSelecting] = useState(false)
  const [selected, setSelected]   = useState<Set<string>>(new Set())
  const [lightbox, setLightbox]   = useState<number | null>(null)
  const [zipping, setZipping]     = useState(false)
  const [zipProgress, setZipProgress] = useState(0)

  useEffect(() => {
    try { if (localStorage.getItem(UNLOCK_KEY) === '1') setUnlocked(true) } catch {}
  }, [])

  // Bloqueia o scroll enquanto o gate ou uma foto estão abertos — controlado pelo
  // estado (não pela montagem dos componentes), por isso liberta de imediato ao fechar,
  // sem depender da animação de saída.
  useScrollLock(!unlocked || lightbox !== null)

  const unlock = () => {
    setUnlocked(true)
    try { localStorage.setItem(UNLOCK_KEY, '1') } catch {}
  }

  const toggleSelect = (name: string) => {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name); else next.add(name)
      return next
    })
  }

  const columns = isMobile ? 2 : 3

  // Download de vários como zip
  const downloadZip = async (names: string[], zipName: string) => {
    if (names.length === 0) return
    setZipping(true)
    setZipProgress(0)
    try {
      const zip = new JSZip()
      for (let i = 0; i < names.length; i++) {
        const res  = await fetch(fullUrl(names[i]))
        const blob = await res.blob()
        zip.file(names[i], blob)
        setZipProgress(Math.round(((i + 1) / names.length) * 100))
      }
      const content = await zip.generateAsync({ type: 'blob' })
      const url = URL.createObjectURL(content)
      const a = document.createElement('a')
      a.href = url
      a.download = zipName
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } finally {
      setZipping(false)
      setZipProgress(0)
    }
  }

  const allNames = useMemo(() => photos.map(p => p.name), [])

  return (
    <div style={{ background: '#000', minHeight: '100vh', paddingBottom: '120px' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px', padding: isMobile ? '0 20px' : '0 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <img src="/logo-header.png" alt="JAYD Prods" style={{ height: '16px', width: 'auto' }} draggable={false} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}>Home</button>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '11px' }}>→</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>Galeria</span>
        </div>
      </div>

      {/* Título */}
      <div style={{ textAlign: 'center', padding: isMobile ? '48px 20px 32px' : '72px 48px 48px' }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>
          {SUBTITLE}
        </p>
        <h1 style={{ fontFamily: "'Delight', sans-serif", fontWeight: 700, fontSize: 'clamp(36px, 6vw, 68px)', letterSpacing: '0.03em', textTransform: 'uppercase', color: '#fff', margin: 0, lineHeight: 1 }}>
          {TITLE}
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginTop: '20px' }}>
          {photos.length} fotos · Clica numa foto para ver · Descarrega grátis
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '12px', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.3)', marginTop: '10px' }}>
          Identifica <strong style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>@jaydprods</strong> nas tuas publicações 🖤
        </p>
      </div>

      {/* Barra de ações */}
      <div style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: isMobile ? '12px 20px' : '14px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => { setSelecting(s => !s); setSelected(new Set()) }}
            style={{ background: selecting ? '#fff' : 'transparent', color: selecting ? '#000' : '#fff', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '999px', padding: '9px 20px', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'all 0.2s' }}
          >
            {selecting ? 'Cancelar' : 'Selecionar'}
          </button>
          {selecting && (
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)' }}>
              {selected.size} selecionada{selected.size === 1 ? '' : 's'}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {selecting ? (
            <button
              onClick={() => downloadZip([...selected], `${SLUG}-selecao.zip`)}
              disabled={selected.size === 0 || zipping}
              style={{ background: selected.size ? '#fff' : 'rgba(255,255,255,0.08)', color: selected.size ? '#000' : 'rgba(255,255,255,0.3)', border: 'none', borderRadius: '999px', padding: '9px 22px', cursor: selected.size ? 'pointer' : 'not-allowed', fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              ↓ Descarregar {selected.size > 0 ? `(${selected.size})` : ''}
            </button>
          ) : (
            <button
              onClick={() => downloadZip(allNames, `${SLUG}-todas.zip`)}
              disabled={zipping}
              style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '999px', padding: '9px 22px', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              ↓ Descarregar tudo
            </button>
          )}
        </div>
      </div>

      {/* Grelha */}
      <div style={{ padding: isMobile ? '3px' : '48px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: isMobile ? '3px' : '10px' }}>
          {photos.map((p, i) => {
            const isSel = selected.has(p.name)
            return (
              <div
                key={p.name}
                className="group"
                onClick={() => selecting ? toggleSelect(p.name) : setLightbox(i)}
                style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden', background: '#0a0a0a', cursor: 'pointer' }}
              >
                <img
                  src={previewUrl(p.name)}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease, opacity 0.2s', opacity: selecting && !isSel ? 0.55 : 1 }}
                  className="group-hover:scale-[1.04]"
                />

                {/* Overlay hover */}
                {!selecting && (
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0)', transition: 'background 0.3s' }} className="group-hover:bg-black/25" />
                )}

                {/* Botão download individual (hover, desktop) / sempre visível no mobile */}
                {!selecting && (
                  <button
                    onClick={e => { e.stopPropagation(); downloadOne(p.name) }}
                    title="Descarregar"
                    style={{ position: 'absolute', bottom: '8px', right: '8px', width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(6px)', opacity: isMobile ? 1 : 0, transition: 'opacity 0.25s' }}
                    className={isMobile ? '' : 'group-hover:opacity-100'}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </button>
                )}

                {/* Check de seleção */}
                {selecting && (
                  <div style={{ position: 'absolute', top: '8px', right: '8px', width: '24px', height: '24px', borderRadius: '50%', background: isSel ? '#fff' : 'rgba(0,0,0,0.4)', border: isSel ? 'none' : '1.5px solid rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {isSel && (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Overlay de progresso do zip */}
      <AnimatePresence>
        {zipping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 1100, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <p style={{ fontFamily: "'Delight', sans-serif", fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff', margin: 0 }}>A preparar o zip…</p>
            <div style={{ width: '240px', height: '3px', background: 'rgba(255,255,255,0.15)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: `${zipProgress}%`, height: '100%', background: '#fff', transition: 'width 0.2s' }} />
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', margin: 0 }}>{zipProgress}%</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox index={lightbox} onClose={() => setLightbox(null)} onDownload={downloadOne} />
        )}
      </AnimatePresence>

      {/* Gate Instagram */}
      <AnimatePresence>
        {!unlocked && <InstagramGate onUnlock={unlock} />}
      </AnimatePresence>

    </div>
  )
}
