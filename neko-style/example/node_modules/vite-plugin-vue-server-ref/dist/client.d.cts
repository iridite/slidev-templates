export { klona as clone } from 'klona/json';

/**
 * Use this to apply diffs on the main thread.
 * newObject = apply(oldObject, patch);
 */
declare function apply(obj: any, diff: any): any;

/**
 * Use this to create a "patch" object in the worker thread.
 * patch = diff(newObject, oldObject);
 */
declare function diff(obj: any, old: any): any;

declare const UNDEFINED = "__UNDEFINED___";
declare function stringify(data: any): string;
declare function parse(json: string): any;
declare function randId(): string;
declare function isObject(obj: any): boolean;
declare function reactiveSet(target: any, value: any): void;
declare function define(target: any, key: string, value: any): void;

export { UNDEFINED, apply, define, diff, isObject, parse, randId, reactiveSet, stringify };
