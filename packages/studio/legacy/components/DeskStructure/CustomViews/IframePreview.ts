import Iframe from 'sanity-plugin-iframe-pane'
import {getPreviewUrl} from '@/utils/getPreviewUrl'
import {StructureBuilder} from 'sanity/structure'

const IframePreview = (S: StructureBuilder, {schemaType} = {} as {schemaType?: string}) =>
  S.view
    .component(Iframe)
    .options({
      url: getPreviewUrl,
    })
    .title('Preview')

export default IframePreview
