import * as F from '../../fields'

// *[_type == 'post' && publishedDate > now()]
// *[_type == 'post' && publishedDate + "T23:59:59Z" > now()]
// *[_type == 'post' && publishedDate > $now]
// *[_type == 'post' && dateTime(publishedDate + "T23:59:59Z") > dateTime(now()) + (14 * 24 * 60 * 60)] // +14 days

export const publishedDate = (props = {}) => {
  const [currentDate] = new Date().toISOString().split('T')
  const dateFormat = 'MMMM DD, YYYY'

  return F.date({
    name: 'publishedDate',
    options: { dateFormat },
    required: true,
    initialValue: () => currentDate,
    ...props,
  })
}

export default publishedDate
