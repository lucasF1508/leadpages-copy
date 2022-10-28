import { BsArrowsExpand as icon } from 'react-icons/bs'
import * as F from '../../fields'

export const components = (
  componentsSchema,
  { name = 'components', ...props } = {}
) =>
  F.array({
    icon,
    name,
    of: [
      ...componentsSchema.map(({ name, title }) =>
        F.field(name, { name, title })
      ),
    ],
  })

export default components
