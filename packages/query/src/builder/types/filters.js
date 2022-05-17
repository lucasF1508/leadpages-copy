import joinValues from '../utils/joinValues'

export const filters = (value, symbol = ' && ', prependSymbol) =>
  joinValues(value, symbol, prependSymbol)
