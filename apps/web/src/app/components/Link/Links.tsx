import type { LinkProps, LinkType } from '@types'
import type { ClassValue } from 'clsx'
import clsx from 'clsx'
import Link from './Link'

export interface LinksProps extends LinkProps {
  className?: ClassValue
  classNames?: {
    link?: ClassValue
    root?: ClassValue
  }
  links: LinkType[]
}

const Links = ({ className, classNames, links, ...props }: LinksProps) =>
  links.length > 0 && (
    <div className={clsx(className, classNames?.root)}>
      {links.map((link) => (
        <Link
          className={clsx(classNames?.link)}
          {...props}
          {...link}
          key={link._key}
        />
      ))}
    </div>
  )

export default Links
