import { Root, Result } from 'postcss';
import { UserConfig } from '@unocss/core';

interface UnoPostcssPluginOptions {
    content?: (string | {
        raw: string;
        extension: string;
    })[];
    directiveMap?: {
        apply?: string;
        screen?: string;
        theme?: string;
        unocss?: string;
    };
    cwd?: string;
    configOrPath?: string | UserConfig;
}

declare function createPlugin(options: UnoPostcssPluginOptions): (root: Root, result: Result) => Promise<void>;

export { createPlugin };
