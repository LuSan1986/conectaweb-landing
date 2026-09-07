import { waLink, whatsappMessages } from '../config/siteConfig'
import Reveal from '../components/Reveal'
import { WhatsAppIcon } from '../components/icons'

export default function FinalCta() {
  return (
    <section className="relative py-24 md:py-32 bg-accent-ink text-paper overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background: 'radial-gradient(900px 420px at 50% 0%, rgba(143,214,193,0.25) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />
      <div className="container text-center max-w-2xl">
        <Reveal>
          <h2 className="font-serif font-semibold text-3xl md:text-[2.6rem] leading-[1.12]">
            Pronto para transformar sua presença digital?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-paper/75 text-base md:text-lg leading-relaxed mt-5">
            Conte-nos sobre seu negócio e vamos mostrar como podemos criar um site profissional para
            você.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-9">
            <a
              href={waLink(whatsappMessages.finalCta)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-accent-ink hover:bg-paper font-semibold text-lg px-9 py-4 rounded-full transition-colors shadow-lift"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Quero criar meu site
            </a>
            <p className="text-sm text-paper/60 mt-4">Fale conosco pelo WhatsApp</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
