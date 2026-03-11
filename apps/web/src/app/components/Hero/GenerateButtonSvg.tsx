'use client'

/**
 * Botón "Generate" como un único SVG: pill violeta, texto, 3 estrellas de 4 puntas
 * y 4 cuadraditos exteriores. Evita problemas de posicionamiento CSS.
 */
import React from 'react'
import clsx from 'clsx'

const VIEW_WIDTH = 200
const VIEW_HEIGHT = 52
const PILL_X = 2
const PILL_Y = 4
const PILL_W = 196
const PILL_H = 44
const PILL_RX = 22

// Estrella 4 puntas (viewBox 0 0 24 24, centrada en 12,12)
const STAR_PATH =
  'M12 0L14 8L24 12L14 16L12 24L10 16L0 12L10 8Z'

export interface GenerateButtonSvgProps {
  label?: string
  className?: string
  'aria-hidden'?: boolean
}

export default function GenerateButtonSvg({
  label = 'Generate My Page',
  className,
  'aria-hidden': ariaHidden,
}: GenerateButtonSvgProps) {
  return (
    <svg
      className={clsx('block h-full w-auto', className)}
      viewBox={`-4 -4 ${VIEW_WIDTH + 8} ${VIEW_HEIGHT + 8}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={ariaHidden}
      role="img"
    >
      {/* Pill violeta */}
      <rect
        x={PILL_X}
        y={PILL_Y}
        width={PILL_W}
        height={PILL_H}
        rx={PILL_RX}
        ry={PILL_RX}
        fill="#6633FF"
      />
      {/* Texto */}
      <text
        x={24}
        y={32}
        fill="#fff"
        fontFamily="inherit"
        fontSize="14"
        fontWeight="600"
        className="font-sans"
      >
        {label}
      </text>
      {/* Estrellas: grande centro (~155,26), chica arriba-izq (148,20), chica abajo-der (162,32) */}
      <g transform="translate(149, 20) scale(0.5)">
        <path d={STAR_PATH} fill="#fff" />
      </g>
      <g transform="translate(144.4, 16.4) scale(0.3)">
        <path d={STAR_PATH} fill="rgba(255,255,255,0.9)" />
      </g>
      <g transform="translate(158.4, 28.4) scale(0.3)">
        <path d={STAR_PATH} fill="rgba(255,255,255,0.9)" />
      </g>
      {/* Cuadraditos: 1 esquina sup izq, 2 inferior 75%, 3 superior 90%, 4 diamante 95% */}
      <rect x={-1} y={-1} width={2} height={2} fill="#6633FF" />
      <rect x={VIEW_WIDTH * 0.75 - 1} y={VIEW_HEIGHT + 2} width={2} height={2} fill="#6633FF" />
      <rect x={VIEW_WIDTH * 0.9 - 1} y={-1} width={2} height={2} fill="#6633FF" />
      <rect
        x={VIEW_WIDTH * 0.95 - 1}
        y={-1}
        width={2}
        height={2}
        fill="#6633FF"
        transform={`rotate(45 ${VIEW_WIDTH * 0.95} 0)`}
      />
    </svg>
  )
}
