import { offerItems, waLink, whatsappMessages } from '../config/siteConfig'
import { trackWhatsAppClick } from '../config/conversionTracking'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { CheckIcon, WhatsAppIcon } from '../components/icons'

export default function Offer() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            eyebrow="Oferta"
            title="Vamos colocar sua empresa na internet do jeito certo?"
            align="center"
            className="mx-auto"
          />
        </div>

        <Reveal delay={100}>
          <div className="max-w-2xl mx-auto mt-12 bg-panel border border-line rounded-2xl p-8 md:p-10">
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {offerItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ink">
                  <span className="h-6 w-6 rounded-full bg-accent-soft text-accent-ink flex items-center justify-center shrink-0">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 pt-7 border-t border-line text-center">
              <a
                href={waLink(whatsappMessages.offer)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-ink text-white font-semibold text-base px-7 py-4 rounded-full transition-colors shadow-lift"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Quero saber mais
              </a>
              <p className="text-xs text-muted mt-3">
                Investimento sob consulta — cada projeto recebe uma proposta personalizada.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
