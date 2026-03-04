import { VueCompilerOptions } from '@vue/language-core';
import { CreateTwoslashOptions, TwoslashExecuteOptions, TwoslashInstance } from 'twoslash';

interface VueSpecificOptions {
    /**
     * Vue Compiler options
     */
    vueCompilerOptions?: Partial<VueCompilerOptions>;
}
interface CreateTwoslashVueOptions extends CreateTwoslashOptions, VueSpecificOptions {
    /**
     * Render the generated code in the output instead of the Vue file
     *
     * @default false
     */
    debugShowGeneratedCode?: boolean;
}
interface TwoslashVueExecuteOptions extends TwoslashExecuteOptions, VueSpecificOptions {
}
/**
 * Create a twoslasher instance that add additional support for Vue SFC.
 */
declare function createTwoslasher(createOptions?: CreateTwoslashVueOptions): TwoslashInstance;
/**
 * @deprecated Use `createTwoslasher` instead.
 */
declare const createTwoslasherVue: typeof createTwoslasher;

export { type CreateTwoslashVueOptions, type TwoslashVueExecuteOptions, type VueSpecificOptions, createTwoslasher, createTwoslasherVue };
