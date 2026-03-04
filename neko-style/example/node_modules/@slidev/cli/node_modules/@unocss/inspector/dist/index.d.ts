import { UnocssPluginContext } from '@unocss/core';
import { Plugin } from 'vite';

declare function UnocssInspector(ctx: UnocssPluginContext): Plugin;

export { UnocssInspector as default };
