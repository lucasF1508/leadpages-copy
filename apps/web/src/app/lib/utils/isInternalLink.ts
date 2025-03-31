export const isInternalLink = (url: string) => /^\/(?!\/)/.test(url)
export default isInternalLink
