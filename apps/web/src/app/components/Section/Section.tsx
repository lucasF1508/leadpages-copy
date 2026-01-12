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
      'theme-light pt-px !-mt-px bg-surface text-body relative rounded-2xl last:box-pb last:!box-[mb*-2]',
      className
    )}
    classNames={classNames}
    components={components}
  >
    <div className="z-base bg-gradient-section pointer-events-none absolute left-0 top-0 h-[41.5rem] w-full rounded-t-2xl" />
    <div className="box-pt box-pb [&>.pinion:first-child]:!mt-0">
      {children
        ? children
        : !!components?.length &&
          components.map((component) => RackInner(component, classNames))}
    </div>
  </Rack>
)

export default Section
