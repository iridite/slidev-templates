import { UserConfig, UserConfigDefaults } from '@unocss/core';
import { LoadConfigSource, LoadConfigResult } from 'unconfig';
export { LoadConfigResult, LoadConfigSource } from 'unconfig';

declare function loadConfig<U extends UserConfig>(cwd?: string, configOrPath?: string | U, extraConfigSources?: LoadConfigSource[], defaults?: UserConfigDefaults): Promise<LoadConfigResult<U>>;
/**
 * Create a factory function that returns a config loader that recovers from errors.
 *
 * When it fails to load the config, it will return the last successfully loaded config.
 *
 * Mainly used for dev-time where users might have a broken config in between changes.
 */
declare function createRecoveryConfigLoader<U extends UserConfig>(): (cwd?: string, configOrPath?: string | U, extraConfigSources?: LoadConfigSource[], defaults?: UserConfigDefaults) => Promise<LoadConfigResult<U>>;

export { createRecoveryConfigLoader, loadConfig };
