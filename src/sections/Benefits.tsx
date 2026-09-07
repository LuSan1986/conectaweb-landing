import { benefits } from '../config/siteConfig'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { CheckIcon } from '../components/icons'

export default function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-panel">
      <div className="container">
        <SectionHeading
          eyebrow="Benefícios"
          title="O que seu site pode fazer pelo seu negócio?"
          align="center"
          className="mx-auto"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 90}>
              <div className="h-full bg-paper border border-line rounded-2xl p-6 flex gap-4">
                <span className="shrink-0 h-9 w-9 rounded-full bg-accent-soft text-accent-ink flex items-center justify-center">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink text-base">{b.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mt-1.5">{b.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
