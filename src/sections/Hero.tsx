import { waLink, whatsappMessages } from '../config/siteConfig'
import { trackWhatsAppClick } from '../config/conversionTracking'
import { ArrowRightIcon, WhatsAppIcon } from '../components/icons'
import Img from '../components/Img'
import Reveal from '../components/Reveal'

export default function Hero() {
  return (
    <section id="top" className="relative pt-[120px] pb-20 md:pt-[168px] md:pb-28 overflow-hidden">
      {/* fundo discreto */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(1100px 520px at 82% -10%, rgb(var(--color-accent-soft)) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container grid lg:grid-cols-[1.05fr_1fr] gap-16 lg:gap-10 items-center">
        <div>
          <Reveal>
            <span className="section-label">Criação de sites profissionais</span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-serif font-semibold text-[2.4rem] leading-[1.08] sm:text-5xl md:text-[3.4rem] md:leading-[1.06] text-ink mt-4">
              Seu negócio merece um site à altura do seu trabalho.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-lg text-muted leading-relaxed mt-6 max-w-lg">
              Sites profissionais, modernos e pensados para transformar visitantes em clientes.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="flex flex-col sm:flex-row gap-3 mt-9">
              <a
                href={waLink(whatsappMessages.hero)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-ink text-white font-semibold text-base px-7 py-4 rounded-full transition-colors shadow-lift"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Quero criar meu site
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 border border-line hover:border-accent text-ink font-semibold text-base px-7 py-4 rounded-full transition-colors"
              >
                Ver exemplos
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <p className="text-xs sm:text-sm text-muted mt-8 flex flex-wrap gap-x-2 gap-y-1">
              <span>Design profissional</span>
              <span aria-hidden="true">•</span>
              <span>Responsivo</span>
              <span aria-hidden="true">•</span>
              <span>Otimizado para Google</span>
              <span aria-hidden="true">•</span>
              <span>WhatsApp integrado</span>
            </p>
          </Reveal>
        </div>

        {/* Composição visual: laptop + phone com screenshots reais de um projeto */}
        <Reveal delay={160} className="relative">
          <div className="relative mx-auto max-w-[560px]">
            <div className="device-laptop w-full">
              <div className="screen aspect-[16/10]">
                <Img
                  src="/images/mockup-desktop.jpg"
                  alt="Exemplo de site criado pela ConectaWeb — versão desktop"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>

            <div className="device-phone absolute -bottom-10 -right-6 w-[34%] shadow-lift animate-float">
              <div className="notch" />
              <div className="screen aspect-[9/19.5]">
                <Img
                  src="/images/mockup-mobile.jpg"
                  alt="Exemplo de site criado pela ConectaWeb — versão mobile"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>

            <div
              className="hidden sm:flex absolute -top-6 -left-6 items-center gap-2 bg-panel border border-line rounded-2xl px-4 py-3 shadow-soft animate-float"
              style={{ animationDelay: '1.4s' }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-whatsapp" aria-hidden="true" />
              <span className="text-xs font-semibold text-ink">WhatsApp integrado</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
