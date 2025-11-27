import {F, P} from '@/schema/tool'
import {BsCapslock as icon} from 'react-icons/bs'

export const schemaInlineCTAGlobalBlock = {
  icon,
  title: 'Inline CTA',
  name: 'schemaInlineCTAGlobalBlock',
  type: 'object',
  fields: [
    F.reference('inlineCTAGlobal', {
      name: 'cta',
      title: 'Reference to Global Blog CTA',
      weak: true, // Allow reference to documents that may not exist (common after migration)
      validation: (Rule: any) => Rule.optional(), // Make it optional to handle missing documents
    }),
  ],
  preview: {
    select: {
      content: 'cta->content',
      image: 'cta->image',
      ctaRef: 'cta._ref',
    },
    prepare: ({content, image, ctaRef}: any) => {
      // Handle case when cta reference doesn't exist or is unavailable
      // This is common for posts migrated before the inlineCTAGlobal documents were migrated
      if (!ctaRef) {
        return {
          title: 'Inline CTA',
          media: icon,
          subtitle: 'No CTA reference selected',
        }
      }
      
      // If reference exists but content/image are not available, the document might not exist
      if (!content && !image) {
        return {
          title: 'Inline CTA (Reference unavailable)',
          media: icon,
          subtitle: `Reference ID: ${ctaRef?.substring(0, 20)}...`,
        }
      }
      
      // Reference exists and has content
      return {
        title: content ? P.richText(content) : 'Inline CTA',
        media: image || icon,
        subtitle: 'Global Blog CTA',
      }
    },
  },
}

