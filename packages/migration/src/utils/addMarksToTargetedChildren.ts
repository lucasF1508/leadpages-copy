import type {
  PortableTextBlock as Block,
} from '@sanity/types';

export interface TargetCriteria {
  childIndex?: number;
  textEquals?: string;
  textIncludes?: string;
  typeEquals?: string; // usually 'span', but can support other inline types
}

const addMarksToTargetedChildren = (
  blocks: Block[],
  mark: string,
  criteria: TargetCriteria
): Block[] => blocks.map((block) => {
  if (block._type !== 'block' || !Array.isArray(block.children)) {
    return block;
  }

    const updatedChildren = block.children.map((child: any, idx: number) => {
      const shouldApply =
        (criteria.childIndex !== undefined && idx === criteria.childIndex) ||
        (criteria.textEquals !== undefined && child.text === criteria.textEquals) ||
        (criteria.textIncludes !== undefined && child.text?.includes(criteria.textIncludes)) ||
        (criteria.typeEquals !== undefined && child._type === criteria.typeEquals);

      if (child._type === 'span' && shouldApply) {
        const updatedMarks = new Set(child.marks ?? []);
        updatedMarks.add(mark);
        return {
          ...child,
          marks: Array.from(updatedMarks)
        };
      }

      return child;
    });

    return {
      ...block,
      children: updatedChildren
    };
  })

export default addMarksToTargetedChildren;