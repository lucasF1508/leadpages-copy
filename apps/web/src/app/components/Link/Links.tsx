import type { InlineSignUpProps } from '../InlineSignUp';
import type { LinkProps, LinkType } from '@types'
import type { ClassValue } from 'clsx'
import clsx from 'clsx'
import InlineSignUp from '@/components/InlineSignUp'
import Link from './Link'
import { hasLink } from './utils'

export interface LinksProps extends LinkProps {
  className?: ClassValue
  classNames?: {
    link?: ClassValue
    root?: ClassValue
  }
  links: LinkType[]
}

const Links = ({ className, classNames, links, ...props }: LinksProps) => {
  const hasSignUpLink = links?.some((link) => link._type === 'signUp')

  if (!links?.length) return null

  if (hasSignUpLink) {
    return (
      <div className={clsx(className, classNames?.root)}>
        {
          links
            .filter((link) => link._type === 'signUp')
            .map((link) =>
              (
                <InlineSignUp
                  className={clsx(classNames?.link)}
                  key={link._key}
                  {...(link as InlineSignUpProps)}
                />
              )
          )
        }
      </div>
    )
  }

  return (
    <div className={clsx(className, classNames?.root)}>
      {
        links?.map((link) =>
          hasLink(link) &&
          (
            <Link
              className={clsx(classNames?.link)}
              {...link}
              {...props}
              key={link._key}
            />
          )
        )
      }
    </div>
  )
}

export default Links
