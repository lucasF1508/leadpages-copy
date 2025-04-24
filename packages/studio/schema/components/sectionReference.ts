import {RxComponent1 as icon} from 'react-icons/rx'
import SharedComponentInput from '@/schema/objects/sharedComponents/SharedComponentInput'
import {F} from '@/schema/tool'

export const sectionReference = F.object({
  icon,
  title: 'Shared Section',
  name: 'sectionReference',
  fields: [
    F.reference('sharedSection', {
      name: 'sectionReference',
      components: {
        field: (props) =>
          props.renderDefault({
            ...props,
            description: 'You can extract all the components inside this referenced section.',
          }),
      },
    }),
  ],
  preview: {
    select: {
      title: 'sectionReference.title',
      components: 'sectionReference.components',
    },
    prepare: ({title, components}) => {
      const count = components?.length || 0

      return {
        title: title || 'Shared Section',
        subtitle: count
          ? `Shared Section - (${count} ${count > 1 ? 'components' : 'component'})`
          : `Shared Section`,
        media: icon,
      }
    },
  },
  components: {
    input: SharedComponentInput,
  },
})
