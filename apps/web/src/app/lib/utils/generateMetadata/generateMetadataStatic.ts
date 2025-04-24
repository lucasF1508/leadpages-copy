import { runQuery } from '@/lib/queries'
import { Metadata, ResolvingMetadata } from 'next';
import { draftMode } from 'next/headers'
import config from 'config'
import { parseImageRef } from '@/lib/utils/parseImageRef'

interface GenerateMetadataStaticProps {
  path: string;
  parent?: ResolvingMetadata
}

const types = config?.studio?.docTypes

const seoQuery = `*[path == $path && _type in $types] {
    ...(seo),
    "seoTitle": coalesce(seo.seoTitle, title),
  }
`

export const generateMetadataStatic = async ({
  path,
  parent,
}: GenerateMetadataStaticProps): Promise<Metadata> => {
  const [data] = await runQuery(seoQuery, { params: { path, types }, preview: draftMode().isEnabled })
  const parentProps = await parent

  const {
    seoImage: image,
    seoTitle: title,
    seoDescription: description,
  } = data || {}

    const {
      url = null,
    } = parseImageRef(image) || {}
  
  return {
    title,
    description,
    openGraph: {
      ...parentProps?.openGraph,
      description: description || parentProps?.description,
      title,
      images: [(url && {height: 630, url, width: 1200}), ...(parentProps?.openGraph?.images || [])],
    } as Metadata['openGraph'],
    twitter: {
      ...parentProps?.twitter,
      description: description || parentProps?.description,
      title,
      images: [url && url, ...(parentProps?.twitter?.images || [])],
    } as Metadata['twitter'],
  };
};