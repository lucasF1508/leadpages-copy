import * as F from '../../fields'
import AdminMessage from 'part:gearbox-admin-message/admin-message'

export const message = (message, { name = 'message', ...props } = {}) =>
  F.string({
    name,
    ...props,
    message,
    inputComponent: AdminMessage,
  })

export default message
