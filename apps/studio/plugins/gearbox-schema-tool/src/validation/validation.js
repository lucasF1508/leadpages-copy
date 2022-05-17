export const validation = (fn) => (Rule) => Rule.custom(fn)

export default validation
