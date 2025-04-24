import {BsCodeSlash as icon} from 'react-icons/bs'
import {F} from '@/legacy/schema/tool'

export const schemaGlobalHeaderFooter = {
  icon,
  name: 'globalHeaderFooter',
  title: 'Global Header/Footer',
  type: 'document',
  fields: [
    // F.text({
    //   name: 'globalHtmlHeader',
    //   title: 'Global Header HTML',
    //   rows: 20,
    //   description:
    //     'HTML to be inserted before the closing head tag on every page.',
    // }),
    F.text({
      name: 'globalHtmlFooter',
      title: 'Global Footer HTML',
      rows: 20,
      description: 'HTML to be inserted before the closing body tag on every page.',
    }),
  ],
}
