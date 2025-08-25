'use client'
import React from 'react'
import clsx from 'clsx'
import useScriptEmbed from '@/hooks/useScriptEmbed'

export interface EmbedProps {
  className?: string
  code?: string
  isResponsive?: boolean
  ratio?: string
}

const Embed = ({
  className,
  code = '',
  isResponsive,
  ratio = '16:9',
}: EmbedProps) => {
  const { components } = useScriptEmbed({
    htmlString: code,
  })
  if (!code) return null

  return (
    <div
      className={clsx(
        '[&>*]:max-w-full',
        isResponsive &&
          'relative inset-0 [&>*]:absolute [&>*]:h-full [&>*]:w-full',
        className
      )}
      style={
        isResponsive ? { aspectRatio: ratio.replace(':', ' / ') } : undefined
      }
    >
      {components && components}
    </div>
  )
}

export default Embed
