import type {
  PortableTextTypeComponent,
  PortableTextTypeComponentProps,
} from '@portabletext/react'
import type { ClassValue } from 'clsx'
import clsx from 'clsx'
import PageAnchor from './Anchor'
import Embed from './Embed'
import Audio from './Audio'
import CardsPreviousNext from './CardsPreviousNext'
import DropShadowBox from './DropShadowBox'
import InlineCTA from './InlineCTA'
import LogoGrid from './LogoGrid'
import Media from './Media'
import StartATrial from './StartATrial'
import Table from './Table'

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
  audio: ({ value }) => <Audio value={value} />,
  cardsPreviousNext: ({ value }) => (
    <CardsPreviousNext value={value} />
  ),
  embed: ({ value }) => <Embed className={classNames?.embed} value={value} />,
  media: ({ value }) => <Media classNames={classNames?.media} value={value} />,
  pageAnchor: ({ value }) => (
    <PageAnchor className={clsx(classNames?.pageAnchor)} value={value} />
  ),
  startATrial: ({ value }) => <StartATrial value={value} />,
  table: ({ value }) => (
    <Table className={clsx(classNames?.table)} value={value} />
  ),
  schemaInlineCTAGlobalBlock: ({ value }) => (
    <InlineCTA value={value} />
  ),
  inlineCTA: ({ value }) => (
    <InlineCTA value={value} />
  ),
  logoGrid: ({ value }) => (
    <LogoGrid value={value} />
  ),
  dropShadowBox: ({ value }) => (
    <DropShadowBox value={value} />
  ),
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
