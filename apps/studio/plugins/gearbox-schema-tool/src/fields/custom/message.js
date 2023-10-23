import AdminMessage from 'part:gearbox-admin-message/admin-message'
import * as F from '../../fields'

export const message = (message, { name = 'message', ...props } = {}) =>
  F.string({
    name,
    ...props,
    message,
    inputComponent: AdminMessage,
  })

export default message
