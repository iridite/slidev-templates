import * as vue from 'vue';
import { PropType, App } from 'vue';
import { HighlighterCore } from 'shiki/core';
import { MagicMoveRenderOptions, MagicMoveDifferOptions, KeyedTokensInfo } from './types.js';
import 'diff-match-patch-es';

declare const ShikiMagicMove: vue.DefineComponent<vue.ExtractPropTypes<{
    highlighter: {
        type: PropType<HighlighterCore>;
        required: true;
    };
    lang: {
        type: StringConstructor;
        required: true;
    };
    theme: {
        type: StringConstructor;
        required: true;
    };
    code: {
        type: StringConstructor;
        required: true;
    };
    options: {
        type: PropType<MagicMoveRenderOptions & MagicMoveDifferOptions>;
        default: () => {};
    };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ("end" | "start")[], "end" | "start", vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    highlighter: {
        type: PropType<HighlighterCore>;
        required: true;
    };
    lang: {
        type: StringConstructor;
        required: true;
    };
    theme: {
        type: StringConstructor;
        required: true;
    };
    code: {
        type: StringConstructor;
        required: true;
    };
    options: {
        type: PropType<MagicMoveRenderOptions & MagicMoveDifferOptions>;
        default: () => {};
    };
}>> & Readonly<{
    onEnd?: ((...args: any[]) => any) | undefined;
    onStart?: ((...args: any[]) => any) | undefined;
}>, {
    options: MagicMoveRenderOptions & MagicMoveDifferOptions;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

/**
 * Component to render a compiled magic move step,
 * Where the tokens can be generated on build time.
 */
declare const ShikiMagicMovePrecompiled: vue.DefineComponent<vue.ExtractPropTypes<{
    steps: {
        type: PropType<KeyedTokensInfo[]>;
        required: true;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    animate: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: PropType<MagicMoveRenderOptions & MagicMoveDifferOptions>;
        default: () => {};
    };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ("end" | "start")[], "end" | "start", vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    steps: {
        type: PropType<KeyedTokensInfo[]>;
        required: true;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    animate: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: PropType<MagicMoveRenderOptions & MagicMoveDifferOptions>;
        default: () => {};
    };
}>> & Readonly<{
    onEnd?: ((...args: any[]) => any) | undefined;
    onStart?: ((...args: any[]) => any) | undefined;
}>, {
    animate: boolean;
    options: MagicMoveRenderOptions & MagicMoveDifferOptions;
    step: number;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

/**
 * A wrapper component to `MagicMoveRenderer`
 */
declare const ShikiMagicMoveRenderer: vue.DefineComponent<vue.ExtractPropTypes<{
    animate: {
        type: BooleanConstructor;
        default: boolean;
    };
    tokens: {
        type: PropType<KeyedTokensInfo>;
        required: true;
    };
    previous: {
        type: PropType<KeyedTokensInfo>;
        required: false;
    };
    options: {
        type: PropType<MagicMoveRenderOptions>;
    };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ("end" | "start")[], "end" | "start", vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    animate: {
        type: BooleanConstructor;
        default: boolean;
    };
    tokens: {
        type: PropType<KeyedTokensInfo>;
        required: true;
    };
    previous: {
        type: PropType<KeyedTokensInfo>;
        required: false;
    };
    options: {
        type: PropType<MagicMoveRenderOptions>;
    };
}>> & Readonly<{
    onEnd?: ((...args: any[]) => any) | undefined;
    onStart?: ((...args: any[]) => any) | undefined;
}>, {
    animate: boolean;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare function install(app: App<any>): void;

export { ShikiMagicMove, ShikiMagicMovePrecompiled, ShikiMagicMoveRenderer, install };
