import { useId, useState } from 'react'
import clsx from 'clsx'
import { faq, waLink, whatsappMessages } from '../config/siteConfig'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { ChevronDownIcon } from '../components/icons'

function FaqItem({
  question,
  answer,
  cta,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  cta?: boolean
  isOpen: boolean
  onToggle: () => void
}) {
  const id = useId()
  return (
    <div className="border-b border-line py-5">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left gap-4"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onToggle}
      >
        <span className="font-medium text-ink text-base">{question}</span>
        <ChevronDownIcon
          className={clsx('h-5 w-5 text-muted shrink-0 transition-transform', isOpen && 'rotate-180')}
        />
      </button>
      <div
        id={id}
        role="region"
        className={clsx('grid transition-all duration-300 ease-soft', isOpen ? 'grid-rows-[1fr] mt-3' : 'grid-rows-[0fr]')}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-muted leading-relaxed pr-8">{answer}</p>
          {cta && (
            <a
              href={waLink(whatsappMessages.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-semibold text-accent-ink mt-3 hover:underline"
            >
              Fale conosco para receber uma proposta →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-28 bg-panel">
      <div className="container">
        <SectionHeading eyebrow="FAQ" title="Perguntas frequentes." align="center" className="mx-auto" />

        <Reveal delay={100} className="max-w-2xl mx-auto mt-12 bg-paper border border-line rounded-2xl px-6 md:px-8">
          {faq.map((item, i) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              cta={item.cta}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
