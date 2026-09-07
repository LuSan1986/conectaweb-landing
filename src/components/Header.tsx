import { useEffect, useState } from 'react'
import { company, navLinks, waLink, whatsappMessages } from '../config/siteConfig'
import { MenuIcon, CloseIcon, WhatsAppIcon } from './icons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-[76px]">
        <a href="#top" className="flex items-center gap-2 shrink-0" aria-label={`${company.name} — página inicial`}>
          <img src="/images/icon.svg" alt="" className="h-8 w-8" />
          <span className="font-serif font-semibold text-lg text-ink">
            Conecta<span className="text-accent">Web</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-accent-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={waLink(whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-ink text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-soft"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Quero meu site
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-paper border-t border-line px-6 pb-8 pt-2 flex flex-col gap-1"
          style={{ animation: 'fade-in 180ms ease forwards' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-medium text-ink border-b border-line/70"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waLink(whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 bg-accent text-white text-base font-semibold px-5 py-3.5 rounded-full"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Quero meu site
          </a>
        </div>
      )}
    </header>
  )
}
