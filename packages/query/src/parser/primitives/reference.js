import mapConditions from '../utils/mapConditions'
import { image } from './image'
import { link } from './link'

export const reference = {
  _type: true,
  _key: '_id',
  title: true,
  slug: true,
  url: 'path',
  ...mapConditions({
    _type: {
      post: {
        publishedDate: true,
        image,
      },
      form: {
        '...': true,
      },
      navigation: {
        '...': true,
        'menu[]': link,
      },
    },
  }),
}

export default reference
