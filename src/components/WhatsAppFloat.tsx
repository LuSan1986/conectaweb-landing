import { waLink, whatsappMessages } from '../config/siteConfig'
import { WhatsAppIcon } from './icons'

/** Botão flutuante (desktop) + barra fixa inferior (mobile). */
export default function WhatsAppFloat() {
  return (
    <>
      {/* Desktop: bolha flutuante no canto inferior direito */}
      <a
        href={waLink(whatsappMessages.default)}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-7 right-7 z-40 items-center justify-center h-14 w-14 rounded-full bg-whatsapp text-white shadow-lift hover:scale-105 transition-transform"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      {/* Mobile: barra fixa inferior, sempre acessível */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] bg-gradient-to-t from-paper via-paper/95 to-transparent">
        <a
          href={waLink(whatsappMessages.default)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-whatsapp text-white font-semibold text-base py-3.5 rounded-full shadow-lift"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Fale conosco pelo WhatsApp
        </a>
      </div>
    </>
  )
}
