import type {
  PortableTextBlock,
} from '@sanity/types';
import { PortableTextMarkDef } from '@src/shape/marksAndDefs'

const addMarksAndMarkDefsToAllBlocks =
  (
    marks: string[],
    markDefs: PortableTextMarkDef[] = []
  ): ((blocks: PortableTextBlock[]) => PortableTextBlock[]) =>
  (blocks: PortableTextBlock[]) => blocks.map((block) => {
      if (block._type !== 'block' || !Array.isArray(block.children)) return block;

      const updatedChildren = block.children.map((child) => {
        if (child._type === 'span') {
          const updatedMarks = new Set(child.marks ?? []);
          marks.forEach((mark) => updatedMarks.add(mark));
          return { ...child, marks: Array.from(updatedMarks) };
        }
        return child;
      });

      const existingDefs = Array.isArray(block.markDefs) ? block.markDefs as PortableTextMarkDef[] : [];
      const newDefs = markDefs.filter(
        (def) => !existingDefs.some((d) => d._key === def._key)
      );

      return {
        ...block,
        children: updatedChildren,
        markDefs: [...existingDefs, ...newDefs]
      };
    });

export default addMarksAndMarkDefsToAllBlocks;