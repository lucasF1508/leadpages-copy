import config from 'config'

const { studio } = config

export const getTemplateTypes = () => studio?.docTypes
export default config
