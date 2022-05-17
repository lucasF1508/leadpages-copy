import joinValues from '../utils/joinValues'

export const pipes = (value, symbol = ' | ') => joinValues(value, symbol)
