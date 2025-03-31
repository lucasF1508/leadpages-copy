import type { ClassValue } from 'clsx'
import clsx from 'clsx'

interface LinkIconProps {
  className?: ClassValue
  classNames?: {
    path?: ClassValue
    root?: ClassValue
  }
}

const LinkIcon = ({ className, classNames }: LinkIconProps) => (
  <svg
    className={clsx('stroke-current w-3 h-3', className, classNames?.root)}
    fill="none"
    viewBox='0 0 24 24'
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={clsx(classNames?.path)}
      d="M20.002 12h-16M15 17s5-3.682 5-5-5-5-5-5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.646"
    />
  </svg>
)

export default LinkIcon
