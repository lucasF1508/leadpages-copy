import type { ClassNames } from '@/components/Rack'
import type { RackInnerComponent } from '@types'
import React from 'react'
import clsx from 'clsx'
import Rack, { RackInner } from '@/components/Rack'

interface SectionProps {
  children?: React.ReactNode
  className?: string
  classNames?: ClassNames
  components?: RackInnerComponent[]
}

const Section = ({
  children,
  className,
  classNames,
  components,
}: SectionProps) => (
  <Rack
    as="div"
    className={clsx(
      'theme-light py-px !-my-px bg-surface text-body relative rounded-2xl',
      className
    )}
    classNames={classNames}
    components={components}
  >
    <div className="z-base bg-gradient-section pointer-events-none absolute left-0 top-0 h-[41.5rem] w-full rounded-t-2xl" />
    {children
      ? children
      : !!components?.length &&
        components.map((component) => RackInner(component, classNames))}
  </Rack>
)

export default Section
