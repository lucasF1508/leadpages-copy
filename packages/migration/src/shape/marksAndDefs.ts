import type {
  PortableTextBlock,
} from '@sanity/types';

export type ContentTransformer = (blocks: PortableTextBlock[]) => PortableTextBlock[];

export interface PortableTextMarkDef {
  [key: string]: any;
  _key: string;
  _type: string;
}

const shapeMarksAndDefs = (
  blocks: PortableTextBlock[],
  ...transformers: ContentTransformer[]
): PortableTextBlock[] => transformers.reduce((result, fn) => fn(result), blocks)

export default shapeMarksAndDefs;