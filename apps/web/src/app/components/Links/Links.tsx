import React from 'react'
import Link from '@/components/Link'
import InlineSignUp, { InlineSignUpProps } from '@/components/InlineSignUp'
import { LinkType } from '@/types'

const Links = ({ links }: {links: LinkType[]}) => (
  <>
    {links?.map(
      ({_type, _key, ...link}) => (
        <React.Fragment key={_key}>
          {_type === 'signUp' 
            ? <InlineSignUp {...link as InlineSignUpProps}/>
            : <Link {...link} /> 
          }
        </React.Fragment>
      )
    )}
  </>
)
 
export default Links