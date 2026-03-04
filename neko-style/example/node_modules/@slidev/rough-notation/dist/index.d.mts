import { ResolvedOptions } from 'roughjs/bin/core';

interface Rect {
    x: number;
    y: number;
    w: number;
    h: number;
}
type RoughAnnotationType = 'underline' | 'box' | 'circle' | 'highlight' | 'strike-through' | 'crossed-off' | 'bracket';
type FullPadding = [number, number, number, number];
type RoughPadding = number | [number, number] | FullPadding;
type BracketType = 'left' | 'right' | 'top' | 'bottom';
interface RoughAnnotationConfig extends RoughAnnotationConfigBase, Partial<ResolvedOptions> {
    type: RoughAnnotationType;
    multiline?: boolean;
    rtl?: boolean;
}
interface RoughAnnotationConfigBase {
    animate?: boolean;
    animationDuration?: number;
    color?: string;
    strokeWidth?: number;
    padding?: RoughPadding;
    iterations?: number;
    brackets?: BracketType | BracketType[];
    delay?: number;
    opacity?: number;
    /**
     * Additional class to add to the root SVG element
     */
    class?: string;
}
interface RoughAnnotation extends RoughAnnotationConfigBase {
    isShowing: () => boolean;
    show: () => void;
    hide: () => void;
    remove: () => void;
}
interface RoughAnnotationGroup {
    show: () => void;
    hide: () => void;
}
type AnnotationState = 'unattached' | 'not-showing' | 'showing';

declare function annotate(element: HTMLElement, config: RoughAnnotationConfig): RoughAnnotation;
declare function annotationGroup(annotations: RoughAnnotation[]): RoughAnnotationGroup;

export { type AnnotationState, type BracketType, type FullPadding, type Rect, type RoughAnnotation, type RoughAnnotationConfig, type RoughAnnotationConfigBase, type RoughAnnotationGroup, type RoughAnnotationType, type RoughPadding, annotate, annotationGroup };
