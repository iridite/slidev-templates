import { VariantHandlerContext, VariantObject } from '@unocss/core';

interface CSSColorValue {
    type: string;
    components: (string | number)[];
    alpha: string | number | undefined;
}
type RGBAColorValue = [number, number, number, number] | [number, number, number];
interface ParsedColorValue {
    /**
     * Parsed color value.
     */
    color?: string;
    /**
     * Parsed opacity value.
     */
    opacity: string;
    /**
     * Color name.
     */
    name: string;
    /**
     * Color scale, preferably 000 - 999.
     */
    no: string;
    /**
     * {@link CSSColorValue}
     */
    cssColor: CSSColorValue | undefined;
    /**
     * Parsed alpha value from opacity
     */
    alpha: string | number | undefined;
}
declare function hex2rgba(hex?: string): RGBAColorValue | undefined;
declare function parseCssColor(str?: string): CSSColorValue | undefined;
declare function colorOpacityToString(color: CSSColorValue): string | number;
declare function colorToString(color: CSSColorValue | string, alphaOverride?: string | number): string;

type ValueHandlerCallback = (str: string) => string | number | undefined;
type ValueHandler<K extends string> = {
    [S in K]: ValueHandler<K>;
} & {
    (str: string): string | undefined;
    __options: {
        sequence: K[];
    };
};
declare function createValueHandler<K extends string>(handlers: Record<K, ValueHandlerCallback>): ValueHandler<K>;

declare const themeFnRE: RegExp;
declare function hasThemeFn(str: string): boolean;
declare function transformThemeFn(code: string, theme: Record<string, any>, throwOnMissing?: boolean): string;
declare function transformThemeString(code: string, theme: Record<string, any>, throwOnMissing?: boolean): string | undefined;

declare function getBracket(str: string, open: string, close: string): string[] | undefined;
declare function getStringComponent(str: string, open: string, close: string, separators: string | string[]): string[] | undefined;
declare function getStringComponents(str: string, separators: string | string[], limit?: number): string[] | undefined;

declare function variantMatcher(name: string, handler: (input: VariantHandlerContext) => Record<string, any>): VariantObject;
declare function variantParentMatcher(name: string, parent: string): VariantObject;
declare function variantGetBracket(prefix: string, matcher: string, separators: string[]): string[] | undefined;
declare function variantGetParameter(prefix: string, matcher: string, separators: string[]): string[] | undefined;

export { type CSSColorValue, type ParsedColorValue, type RGBAColorValue, type ValueHandler, type ValueHandlerCallback, colorOpacityToString, colorToString, createValueHandler, getBracket, getStringComponent, getStringComponents, hasThemeFn, hex2rgba, parseCssColor, themeFnRE, transformThemeFn, transformThemeString, variantGetBracket, variantGetParameter, variantMatcher, variantParentMatcher };
