import type { LinkType } from '@types'
import React from 'react'
import Link from '@/components/Link'

const _Link = ({
  children,
  value,
}: {
  children: React.ReactNode
  value?: LinkType
}) => <Link {...value}>{children}</Link>

export default _Link
