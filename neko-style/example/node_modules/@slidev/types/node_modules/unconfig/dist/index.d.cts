import { L as LoadConfigOptions, a as LoadConfigResult } from './shared/unconfig.13feb805.cjs';
export { B as BuiltinParsers, C as CustomParser, I as ImportxOptions, b as LoadConfigSource, S as SearchOptions, d as defaultExtensions } from './shared/unconfig.13feb805.cjs';
import '@antfu/utils';
import 'importx';

declare function createConfigLoader<T>(options: LoadConfigOptions): {
    load: (force?: boolean) => Promise<LoadConfigResult<T>>;
    findConfigs: () => Promise<string[]>;
};
declare function loadConfig<T>(options: LoadConfigOptions<T>): Promise<LoadConfigResult<T>>;

export { LoadConfigOptions, LoadConfigResult, createConfigLoader, loadConfig };
