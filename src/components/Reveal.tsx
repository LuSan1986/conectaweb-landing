import type { ReactNode } from 'react'
import clsx from 'clsx'
import { useReveal } from './useReveal'

export default function Reveal({
  children,
  className,
  delay,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li' | 'span'
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <Tag
      ref={ref as never}
      className={clsx('reveal', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
