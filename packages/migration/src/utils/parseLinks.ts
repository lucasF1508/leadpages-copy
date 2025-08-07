import { omit } from "lodash"

const linkStyleMapping: Record<string, string> = {
  button: 'button-solid',
  ghost: 'button-outline'
}

const isSignUpLink = (link: Record<string, any>) => (
    link?._type === 'signUp' ||
    link?.url?.includes('/order-leadpages')
  )

const sanitizeLink = (link: Record<string, any>) => {
  if (!link) return null
  const isSignUp = isSignUpLink(link)

  const keysToOmit = isSignUp ? ['hasHash', 'linkStyle', 'page', 'target', 'url', 'condition', 'video'] : ['value', 'page']

  return {
    ...omit(link, keysToOmit),
    _type: isSignUp ? 'signUp' : link._type,
    linkStyle: !isSignUp ? linkStyleMapping[link?.linkStyle] || 'text' : undefined,
    placeholder: isSignUp ? link?.placeholder || 'Work Email' : undefined,
    signUpType: isSignUp ? link?.signUpType || 'plan' : undefined,
  }
}

const parseLinks = (_links: any) => {
  const links = Array.isArray(_links) ? _links : [_links] 
  return links?.map(sanitizeLink).filter(Boolean)
}

export default parseLinks