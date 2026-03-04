import MagicString, { MagicStringOptions, SourceMapOptions, SourceMap, DecodedSourceMap } from 'magic-string';

interface MagicStringStackType extends MagicString {
}
interface MagicStringStack extends MagicStringStackType {
}
declare class MagicStringStack implements MagicStringStackType {
    private _options?;
    /**
     * The stack of MagicString instances.
     * Lastest instance is pushed to the front of the array.
     */
    private _stack;
    /**
     * Prepresents the current MagicString instance.
     * It should be in the this._stack[0]
     */
    private _current;
    constructor(content: string, _options?: MagicStringOptions | undefined);
    /**
     * Commit current changes and reset the `.original` property and the indices.
     *
     * When running `generateMap`, the sourcemaps will be generated and merged into a single sourcemap.
     */
    commit(): this;
    /**
     * Rollback to the previous commit.
     */
    rollback(): this;
    get original(): string;
    toString(): string;
    clone(): this;
    /**
     * Generates a version 3 sourcemap.
     */
    generateMap(options?: SourceMapOptions): SourceMap;
    /**
     * Generates a sourcemap object with raw mappings in array form, rather than encoded as a string.
     * Useful if you need to manipulate the sourcemap further, but most of the time you will use `generateMap` instead.
     */
    generateDecodedMap(options?: SourceMapOptions): DecodedSourceMap;
}

export { MagicStringStack as default };
