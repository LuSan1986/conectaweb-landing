import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const items = [
  { title: 'Design personalizado', description: 'Uma identidade visual pensada para o seu negócio, não um modelo genérico.' },
  { title: 'Site responsivo', description: 'Experiência perfeita em celular, tablet e computador.' },
  { title: 'WhatsApp integrado', description: 'O contato mais usado pelo seu cliente, a um toque de distância.' },
  { title: 'Redes sociais', description: 'Instagram, Facebook e outros canais conectados ao site.' },
  { title: 'Galeria de imagens', description: 'Mostre seu trabalho, seu espaço e seus resultados.' },
  { title: 'Formulários', description: 'Facilite o primeiro contato de quem ainda não conhece você.' },
  { title: 'Google Maps', description: 'Ajude o cliente a te encontrar fisicamente, se for o caso.' },
  { title: 'SEO', description: 'Estrutura pensada para ajudar seu negócio a ser encontrado.' },
  { title: 'Performance', description: 'Carregamento rápido, em qualquer conexão.' },
]

export default function Solution() {
  return (
    <section id="solucao" className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Nós transformamos sua presença digital em uma experiência profissional."
          description="Cada projeto é construído com um conjunto completo de recursos pensados para gerar confiança e facilitar o contato."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <div className="h-full bg-panel border border-line rounded-2xl p-6 hover:border-accent/50 hover:shadow-soft transition-all">
                <h3 className="font-semibold text-ink text-base">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed mt-2">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
