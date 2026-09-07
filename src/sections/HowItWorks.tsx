import { processSteps } from '../config/siteConfig'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do primeiro contato ao site publicado."
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-16 max-w-5xl mx-auto">
          <div
            className="hidden md:block absolute top-6 left-0 right-0 h-px bg-line"
            aria-hidden="true"
          />
          <ol className="grid md:grid-cols-5 gap-8 md:gap-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 90} as="li">
                <div className="relative flex md:flex-col gap-4 md:gap-0">
                  <span className="relative shrink-0 md:mb-5 h-12 w-12 rounded-full bg-accent text-white font-serif font-semibold flex items-center justify-center z-10">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink text-base">{step.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mt-1.5">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
