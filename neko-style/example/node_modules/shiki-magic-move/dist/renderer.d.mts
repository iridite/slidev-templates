import { MagicMoveRenderOptions, KeyedTokensInfo } from './types.mjs';
import 'diff-match-patch-es';
import 'shiki/core';

declare const defaultOptions: Required<MagicMoveRenderOptions>;
declare class MagicMoveRenderer {
    private mapDom;
    private container;
    private anchor;
    private previousPromises;
    options: Required<MagicMoveRenderOptions>;
    private isFirstRender;
    constructor(target: HTMLElement | string, options?: MagicMoveRenderOptions);
    private applyElementContent;
    private applyElementStyle;
    private applyElement;
    private applyNodeStyle;
    private applyContainerStyle;
    private registerTransitionEnd;
    setCssVariables(): void;
    /**
     * Replace tokens without animation
     */
    replace(step: KeyedTokensInfo): void;
    /**
     * Render tokens with animation
     */
    render(step: KeyedTokensInfo): Promise<void>;
}

export { MagicMoveRenderer, defaultOptions };
