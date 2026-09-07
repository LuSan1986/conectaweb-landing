import type { ReactNode } from 'react'
import clsx from 'clsx'
import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={clsx('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <Reveal>
          <span className="section-label">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="font-serif font-semibold text-3xl md:text-[2.6rem] leading-[1.12] text-ink mt-3">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className="text-muted text-base md:text-lg leading-relaxed mt-4">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
