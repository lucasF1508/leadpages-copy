import useInfiniteScroll from 'react-infinite-scroll-hook';

import { TemplateState, TemplateActionCreators } from './useTemplateState';

export type InfiniteScrollRef = React.MutableRefObject<HTMLDivElement | null>;

export function useInfiniteScrollRef(
  state: TemplateState,
  actions: TemplateActionCreators,
  threshold?: number,
): InfiniteScrollRef {
  const infiniteRef: React.MutableRefObject<HTMLDivElement | null> = useInfiniteScroll({
    loading: state.ui.isLoading,
    hasNextPage: state.ui.hasLoaded && state.templates.length < state.ui.total,
    onLoadMore: actions.onLoadNextPage,
    threshold: threshold || 750,
  });
  return infiniteRef;
}

export default useInfiniteScrollRef;
