import client from 'part:@sanity/base/client'

export const setOrder = async (_id, index, field = 'order') => {
  return client
    .patch(_id)
    .set({ [field]: index })
    .commit()
}

export const setListOrder = async (list, field = 'order', start = 0) => {
  return Promise.all(
    list.map(({ _id }, index) => {
      return setOrder(_id, index + start, field)
    })
  )
}
