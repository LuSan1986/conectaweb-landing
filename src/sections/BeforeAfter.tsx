import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { CheckIcon } from '../components/icons'

const before = [
  'Depende só das redes sociais',
  'Difícil de encontrar no Google',
  'Sem espaço próprio para mostrar o trabalho',
  'Passa impressão de negócio informal',
]

const after = [
  'Presença digital própria e permanente',
  'Estruturado para aparecer em buscas',
  'Espaço dedicado para portfólio e serviços',
  'Transmite profissionalismo e confiança',
]

export default function BeforeAfter() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="A diferença"
          title="A percepção do seu negócio muda com uma presença digital própria."
          align="center"
          className="mx-auto"
        />

        <div className="grid md:grid-cols-2 gap-5 mt-14 max-w-3xl mx-auto">
          <Reveal>
            <div className="h-full bg-panel border border-line rounded-2xl p-7 md:p-8">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                Sem presença digital profissional
              </span>
              <ul className="mt-5 space-y-3.5">
                {before.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-line shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full bg-accent-ink text-paper rounded-2xl p-7 md:p-8 shadow-lift">
              <span className="text-xs font-semibold uppercase tracking-wide text-[#8fd6c1]">
                Com um site profissional
              </span>
              <ul className="mt-5 space-y-3.5">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckIcon className="h-4 w-4 text-[#8fd6c1] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
