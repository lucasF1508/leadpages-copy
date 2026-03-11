'use client'

import styles from './GenerateButton.module.css'
import { useEffect, useRef } from 'react'

export interface GenerateButtonProps {
  children: React.ReactNode
  /** Si true, renderiza como <button>; si false, como <span> para usar dentro de <Link> */
  asButton?: boolean
  /** Variante más baja para encajar en fila con input */
  compact?: boolean
  className?: string
}

export default function GenerateButton({
  children,
  asButton = false,
  compact = false,
  className,
}: GenerateButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createParticle = () => {
      const particle = document.createElement('span')
      particle.className = styles.particle ?? ''

      const size = Math.random() * 6 + 4
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`

      particle.style.left = Math.random() * 100 + '%'
      particle.style.animationDuration = Math.random() * 2 + 2 + 's'

      container.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 4000)
    }

    const interval = setInterval(createParticle, 300)

    return () => clearInterval(interval)
  }, [])

  const content = (
    <>
      {children}
      <span className={styles.sparkle} aria-hidden>✨</span>
    </>
  )

  return (
    <div
      className={[styles.wrapper, compact && styles.compact, className].filter(Boolean).join(' ')}
      ref={containerRef}
    >
      {asButton ? (
        <button type="button" className={styles.button}>
          {content}
        </button>
      ) : (
        <span className={styles.button} role="presentation">
          {content}
        </span>
      )}
    </div>
  )
}
