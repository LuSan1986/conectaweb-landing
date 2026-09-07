import { differentiators, techStack } from '../config/siteConfig'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { CheckIcon } from '../components/icons'

export default function Differentiators() {
  return (
    <section className="py-20 md:py-28 bg-panel">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionHeading
              eyebrow="Diferenciais"
              title="Não criamos apenas sites bonitos."
              description="Criamos experiências digitais pensadas para representar sua marca e facilitar o próximo passo do seu cliente."
            />

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5 mt-10">
              {differentiators.map((item, i) => (
                <Reveal key={item} delay={i * 60} as="li">
                  <div className="flex items-start gap-2.5 text-sm text-ink/85">
                    <CheckIcon className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <Reveal>
              <div className="bg-paper border border-line rounded-2xl p-7">
                <span className="section-label">Tecnologia</span>
                <p className="text-sm text-muted leading-relaxed mt-3">
                  Usamos uma stack moderna — o cliente compra o resultado, não a tecnologia por trás
                  dele.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {techStack.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium bg-accent-soft text-accent-ink px-3 py-1.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-accent-ink text-paper rounded-2xl p-7">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#8fd6c1]">
                  Design e tecnologia trabalhando juntos
                </span>
                <p className="text-sm leading-relaxed mt-3 text-paper/85">
                  Utilizamos ferramentas modernas de inteligência artificial para acelerar a criação
                  de imagens, conceitos visuais e conteúdo — sempre como apoio ao processo criativo,
                  nunca como substituto da estratégia e do design.
                </p>
                <p className="text-xs text-paper/60 mt-4">
                  O que entregamos: resultado + design + estratégia + tecnologia.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Espaço preparado para vídeo de apresentação */}
        <Reveal delay={140}>
          <div className="mt-16 rounded-2xl border border-dashed border-line bg-paper p-10 md:p-16 text-center">
            <span className="section-label">Vídeo de apresentação</span>
            <p className="font-serif text-xl md:text-2xl text-ink mt-3 max-w-xl mx-auto">
              Em breve: um vídeo mostrando a navegação pelos nossos projetos, do desktop ao mobile.
            </p>
            <p className="text-sm text-muted mt-2">Espaço reservado — substitua por um player de vídeo quando disponível.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
