import {getKindTitle} from './templates'

const getTemplateTitle = ({templateTitle, heading, kind}) =>
  !heading ? `${templateTitle}: High-Converting ${getKindTitle(kind)} Template` : `${heading}`

export {getTemplateTitle}
