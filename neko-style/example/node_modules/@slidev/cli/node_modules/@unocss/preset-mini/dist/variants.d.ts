import { VariantObject, Variant } from '@unocss/core';
import { PresetMiniOptions } from './index.js';
import { T as Theme } from './shared/preset-mini.Cde3ndkA.js';
import './colors.js';
import './shared/preset-mini.BooHsK52.js';
import './shared/preset-mini.DChc_8j2.js';
import '@unocss/rule-utils';

declare const variantAria: VariantObject;
declare const variantTaggedAriaAttributes: Variant[];

declare function calcMaxWidthBySize(size: string): string;
declare function variantBreakpoints(): VariantObject;

declare const variantChildren: Variant[];

declare const variantCombinators: Variant[];

declare const variantContainerQuery: VariantObject;

declare function variantColorsMediaOrClass(options?: PresetMiniOptions): Variant[];

declare const variantDataAttribute: VariantObject;
declare const variantTaggedDataAttributes: Variant[];

declare function variants(options: PresetMiniOptions): Variant<Theme>[];

declare const variantLanguageDirections: Variant[];

declare function variantImportant(): VariantObject;

declare const variantPrint: VariantObject;
declare const variantCustomMedia: VariantObject;

declare const variantSelector: Variant;
declare const variantCssLayer: Variant;
declare const variantInternalLayer: Variant;
declare const variantScope: Variant;
declare const variantVariables: Variant;
declare const variantTheme: Variant;

declare const variantNegative: Variant;

declare function variantPseudoClassesAndElements(): VariantObject;
declare function variantPseudoClassFunctions(): VariantObject;
declare function variantTaggedPseudoClasses(options?: PresetMiniOptions): VariantObject[];
declare const variantPartClasses: VariantObject;

declare const variantStartingStyle: Variant;

declare const variantSupports: VariantObject;

export { calcMaxWidthBySize, variantAria, variantBreakpoints, variantChildren, variantColorsMediaOrClass, variantCombinators, variantContainerQuery, variantCssLayer, variantCustomMedia, variantDataAttribute, variantImportant, variantInternalLayer, variantLanguageDirections, variantNegative, variantPartClasses, variantPrint, variantPseudoClassFunctions, variantPseudoClassesAndElements, variantScope, variantSelector, variantStartingStyle, variantSupports, variantTaggedAriaAttributes, variantTaggedDataAttributes, variantTaggedPseudoClasses, variantTheme, variantVariables, variants };
