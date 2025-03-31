export const scrollTo = ({
  behavior = 'smooth',
  top = 0,
}: {
  behavior: ScrollBehavior
  top: number
}) => window.scrollTo({ behavior, top })

export default scrollTo
