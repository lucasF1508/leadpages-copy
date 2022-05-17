export const isInternalLink = (url) => /^\/(?!\/)/.test(url)
export default isInternalLink
