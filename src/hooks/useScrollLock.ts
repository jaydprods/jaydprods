import { useEffect } from 'react'

export function useScrollLock(active = true) {
  useEffect(() => {
    if (!active) return
    const scrollY = window.scrollY

    // Funciona em iOS Safari (overflow: hidden no body não chega)
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''
      // Restaura a posição exata onde estava — instantâneo, sem o scroll suave
      // do CSS (que faria uma animação visível ao fechar a foto)
      const html = document.documentElement
      const prevBehavior = html.style.scrollBehavior
      html.style.scrollBehavior = 'auto'
      window.scrollTo(0, scrollY)
      html.style.scrollBehavior = prevBehavior
    }
  }, [active])
}
