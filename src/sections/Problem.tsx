import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const questions = [
  'Seu negócio ainda depende apenas do Instagram?',
  'Quando alguém pesquisa sua empresa no Google, o que encontra?',
  'Seu concorrente parece mais profissional simplesmente porque tem uma presença digital melhor?',
]

export default function Problem() {
  return (
    <section className="py-20 md:py-28 bg-panel">
      <div className="container">
        <SectionHeading
          eyebrow="O cenário"
          title="Seu cliente pesquisa antes de entrar em contato."
          align="center"
          className="mx-auto"
        />

        <div className="grid sm:grid-cols-3 gap-5 mt-14 max-w-4xl mx-auto">
          {questions.map((q, i) => (
            <Reveal key={q} delay={i * 90}>
              <div className="h-full bg-paper border border-line rounded-2xl p-6">
                <p className="font-serif text-lg leading-snug text-ink">{q}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={260}>
          <p className="text-center text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-12">
            Redes sociais são importantes — mas podem mudar, sair do ar ou perder alcance. Um site
            próprio transmite credibilidade, fica no ar 24 horas por dia e é o primeiro lugar que um
            cliente em dúvida procura. <strong className="text-ink font-semibold">Site e redes sociais funcionam melhor juntos.</strong>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
