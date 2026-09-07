import { useEffect, useRef } from 'react'

/**
 * Hook de "reveal on scroll": adiciona a classe `.reveal` no elemento e
 * observa via IntersectionObserver, adicionando `.is-visible` quando entra
 * na viewport. Respeita prefers-reduced-motion (tratado via CSS).
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
