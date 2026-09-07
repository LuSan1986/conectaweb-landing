import { testimonials } from '../config/siteConfig'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que os clientes dizem."
          align="center"
          className="mx-auto"
        />

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="h-full bg-panel border border-line rounded-2xl p-6 flex flex-col relative">
                <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wide text-muted bg-paper border border-line rounded-full px-2 py-1">
                  Ilustrativo
                </span>
                <Stars />
                <p className="font-serif text-lg leading-snug text-ink mt-4 flex-1">“{t.quote}”</p>
                <div className="mt-5 text-sm">
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-muted">{t.company}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-xs text-muted mt-6">
          Depoimentos ilustrativos — serão substituídos por avaliações reais de clientes.
        </p>
      </div>
    </section>
  )
}
