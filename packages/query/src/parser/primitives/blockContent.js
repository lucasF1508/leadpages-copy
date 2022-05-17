import { link } from './link'

export const blockContent = {
  '...': true,
  'markDefs[]': {
    '...': true,
    '_type == "link" =>': link,
  },
}

export default blockContent
