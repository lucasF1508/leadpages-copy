import type {
  PortableTextTypeComponent,
  PortableTextTypeComponentProps,
} from '@portabletext/react'
import type { ClassValue } from 'clsx'
import Embed from './Embed'
import Media from './Media'

interface ComponentTypesProps {
  classNames: {
    blockquote?: ClassValue
    embed?: ClassValue
    hr?: ClassValue
    media?: {
      media?: ClassValue
      root?: ClassValue
    }
    pageAnchor?: ClassValue
    socialLinks?: ClassValue
    table?: ClassValue
  }
}

export const types = ({
  classNames,
}: ComponentTypesProps): Record<string, PortableTextTypeComponent<any>> => ({
  embed: ({ value }) => <Embed className={classNames?.embed} value={value} />,
  media: ({ value }) => <Media classNames={classNames?.media} value={value} />,
})

const contentBlockReference = ({
  classNames,
  value,
  ...props
}: ComponentTypesProps & PortableTextTypeComponentProps<any>) => {
  if (!value?.components || value?.components?.length === 0) return null

  return value.components?.map((component: any) => {
    const RefComponent = types({ classNames })?.[component?._type]
    if (!RefComponent) return null

    return <RefComponent key={component?._key} value={component} {...props} />
  })
}

const ComponentTypes = ({
  classNames,
}: ComponentTypesProps): Record<string, PortableTextTypeComponent<any>> => ({
  ...types({ classNames }),
  contentBlockReference: (props) =>
    contentBlockReference({ ...props, classNames }),
})

export default ComponentTypes
