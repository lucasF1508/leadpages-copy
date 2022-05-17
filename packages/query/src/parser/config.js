import parser from 'config/parser'

export const getParserConfig = (type) => parser[type] || {}

export default parser
