import joinValues from '../utils/joinValues'

export const order = (value, symbol = ' | ') => joinValues(value, symbol)
