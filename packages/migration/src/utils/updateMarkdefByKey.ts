import type {
  PortableTextBlock as Block,
} from '@sanity/types';
import { ContentTransformer, PortableTextMarkDef } from '@src/shape/marksAndDefs'

const updateMarkDefByKey =
  (
    markKey: string,
    updates: Partial<PortableTextMarkDef>
  ): ContentTransformer =>
  (blocks: Block[]): Block[] =>
    blocks.map((block) => {
      if (block._type !== 'block') return block;

      const markDefs = Array.isArray(block.markDefs)
        ? (block.markDefs as PortableTextMarkDef[])
        : [];

      const updatedMarkDefs = markDefs.map((def) =>
        def._key === markKey ? { ...def, ...updates } : def
      );

      return {
        ...block,
        markDefs: updatedMarkDefs
      };
    });

export default updateMarkDefByKey;