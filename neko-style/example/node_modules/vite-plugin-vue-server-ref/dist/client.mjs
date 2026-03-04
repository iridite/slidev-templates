export { klona as clone } from 'klona/json';

function apply(obj, diff) {
  if (typeof obj !== typeof diff)
    return diff;
  if (typeof diff === "object") {
    if (Array.isArray(diff))
      return diff;
    let out;
    if (Array.isArray(obj)) {
      out = obj;
      for (const i in diff)
        out[i] = apply(obj[i], diff[i]);
    } else {
      out = obj;
      for (const i in diff)
        out[i] = apply(obj[i], diff[i]);
    }
    return out;
  }
  return diff;
}

function diff(obj, old) {
  if (typeof obj === "object") {
    const isArray = Array.isArray(obj);
    if (!old || typeof old !== "object" || isArray !== Array.isArray(old))
      return obj;
    if (isArray) {
      let out2;
      let i = 0;
      const max = Math.min(obj.length, old.length);
      for (; i < max; i++) {
        const differs = different(obj[i], old[i]);
        if (differs)
          break;
      }
      const useArray = old.length === 0;
      const offset = obj.length - old.length;
      for (let j = obj.length; j-- > i; ) {
        const oldJ = j - offset;
        if (oldJ >= 0) {
          const differs = different(obj[j], old[oldJ]);
          if (differs) {
            if (!out2)
              out2 = useArray ? [] : {};
            out2[j] = diff(obj[j], old[oldJ]);
          }
        } else {
          if (!out2)
            out2 = useArray ? [] : {};
          out2[j] = obj[j];
        }
      }
      return out2;
    }
    let out;
    for (const key in obj) {
      if (!(key in old) || obj[key] !== old[key]) {
        if (!out)
          out = {};
        const r = diff(obj[key], old[key]);
        if (r !== void 0)
          out[key] = r;
      }
    }
    for (const key in old) {
      if (obj == null || !(key in obj)) {
        if (!out)
          out = {};
        out[key] = void 0;
      }
    }
    return out;
  } else if (obj !== old) {
    return obj;
  }
}
function different(obj, old) {
  for (const key in obj) {
    if (old == null || !(key in old) || obj[key] !== old[key])
      return true;
  }
  for (const key in old) {
    if (obj == null || !(key in obj))
      return true;
  }
  return false;
}

const UNDEFINED = "__UNDEFINED___";
function stringify(data) {
  return JSON.stringify(data, (key, value) => value === void 0 ? UNDEFINED : value);
}
function parse(json) {
  return JSON.parse(json, (key, value) => value === UNDEFINED ? void 0 : value);
}
function randId() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(2, 10);
}
function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}
function reactiveSet(target, value) {
  for (const key of Object.keys(value)) {
    if (target[key] !== value[key])
      target[key] = value[key];
  }
  const originalKeys = new Set(Object.keys(target));
  Object.keys(value).forEach((i) => originalKeys.delete(i));
  for (const key of originalKeys)
    delete target[key];
}
function define(target, key, value) {
  Object.defineProperty(target, key, {
    value,
    writable: true,
    enumerable: false
  });
}

export { UNDEFINED, apply, define, diff, isObject, parse, randId, reactiveSet, stringify };
