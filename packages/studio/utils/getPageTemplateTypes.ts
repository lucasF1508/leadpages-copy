import {getTemplateTypes} from './getTemplateTypes'

export const getPageTemplateTypes = () => {
  const includes = 'page'
  const visible = {includes, showHidden: false}
  const all = {includes, showHidden: true}
  const hidden = {includes, onlyHidden: true}

  return {
    all: getTemplateTypes(all),
    hidden: getTemplateTypes(hidden),
    visible: getTemplateTypes(visible),
  }
}
