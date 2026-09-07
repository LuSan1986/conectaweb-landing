import { useState } from 'react'
import clsx from 'clsx'
import { portfolioFilters, portfolioProjects, type PortfolioCategory } from '../config/siteConfig'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { ArrowRightIcon } from '../components/icons'

export default function Portfolio() {
  const [filter, setFilter] = useState<'todos' | PortfolioCategory>('todos')

  const visible =
    filter === 'todos' ? portfolioProjects : portfolioProjects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-panel">
      <div className="container">
        <SectionHeading
          eyebrow="Portfólio"
          title="Veja o que podemos criar para o seu negócio."
          description="Um projeto real já construído — e a estrutura pronta para os próximos, em diferentes segmentos."
        />

        <div className="flex flex-wrap gap-2 mt-10" role="tablist" aria-label="Filtrar projetos por segmento">
          {portfolioFilters.map((f) => (
            <button
              key={f.value}
              type="button"
              role="tab"
              aria-selected={filter === f.value}
              onClick={() => setFilter(f.value)}
              className={clsx(
                'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
                filter === f.value
                  ? 'bg-accent text-white border-accent'
                  : 'bg-paper text-ink/70 border-line hover:border-accent/50',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 90}>
              <article className="group h-full flex flex-col bg-paper border border-line rounded-2xl overflow-hidden hover:shadow-soft transition-shadow">
                <div className="aspect-[4/3] bg-accent-soft relative overflow-hidden">
                  {!project.placeholder && project.image ? (
                    <Img
                      src={project.image}
                      alt={`Prévia do site — ${project.segment}`}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <span className="text-center text-sm font-medium text-accent-ink/60 border border-dashed border-accent/30 rounded-xl px-4 py-6">
                        {project.title}
                      </span>
                    </div>
                  )}
                  {project.placeholder && (
                    <span className="absolute top-3 right-3 bg-ink/85 text-paper text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full">
                      Em breve
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="section-label">{project.segment}</span>
                  <p className="text-sm text-muted leading-relaxed mt-2 flex-1">{project.description}</p>
                  {!project.placeholder && project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink mt-4 hover:gap-2.5 transition-all"
                    >
                      Ver projeto
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
