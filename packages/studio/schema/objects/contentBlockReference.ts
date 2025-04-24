import {RxComponent1 as icon} from 'react-icons/rx'
import SharedComponentInput from '@/schema/objects/sharedComponents/SharedComponentInput'
import {F} from '@/schema/tool'

export const contentBlockReference = F.object({
  icon,
  title: 'Shared Content Block',
  name: 'contentBlockReference',
  fields: [
    F.reference('sharedContentBlock', {
      name: 'contentBlockReference',
      components: {
        field: (props) =>
          props.renderDefault({
            ...props,
            description: 'You can extract all the components inside this referenced content block.',
          }),
      },
    }),
  ],
  preview: {
    select: {
      title: 'contentBlockReference.title',
      components: 'contentBlockReference.components',
    },
    prepare: ({title, components}) => {
      const count = components?.length || 0
      return {
        title: title || 'Shared Content Block',
        subtitle: count
          ? `Shared Content Block - (${count} ${count > 1 ? 'components' : 'component'})`
          : `Shared Content Block`,
        media: icon,
      }
    },
  },
  components: {
    input: SharedComponentInput,
  },
})
