/// <reference types="react" />
import { TemplateState, TemplateActionCreators } from './useTemplateState';
export declare type InfiniteScrollRef = React.MutableRefObject<HTMLDivElement | null>;
export declare function useInfiniteScrollRef(state: TemplateState, actions: TemplateActionCreators, threshold?: number): InfiniteScrollRef;
export default useInfiniteScrollRef;
