import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

/** Wraps content in a subtle fade-up entrance triggered on scroll. */
export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
