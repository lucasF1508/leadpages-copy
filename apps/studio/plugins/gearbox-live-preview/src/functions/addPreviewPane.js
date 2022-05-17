import IframePreview from '../components/IframePreview'

export const addPreviewPane = ({ deskStructure: S, title = 'Preview' }) =>
  S.view.component(IframePreview).title(title)

export default addPreviewPane
