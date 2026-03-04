import { randomSeed } from 'roughjs/bin/math';
import { line, ellipse, linearPath, rectangle } from 'roughjs/bin/renderer';
import { RoughGenerator } from 'roughjs/bin/generator';

const SVG_NS = "http://www.w3.org/2000/svg";
const DEFAULT_ANIMATION_DURATION = 800;

let defaultOptions = null;
function getDefaultOptions() {
  if (!defaultOptions) {
    const gen = new RoughGenerator();
    defaultOptions = gen.defaultOptions;
  }
  return defaultOptions;
}
function getOptions(type, seed, overrides) {
  return {
    ...getDefaultOptions(),
    maxRandomnessOffset: 2,
    roughness: type === "highlight" ? 3 : 1.5,
    bowing: 1,
    stroke: "#000",
    strokeWidth: 1.5,
    curveTightness: 0,
    curveFitting: 0.95,
    curveStepCount: 9,
    fillStyle: "hachure",
    fillWeight: -1,
    hachureAngle: -41,
    hachureGap: -1,
    dashOffset: -1,
    dashGap: -1,
    zigzagOffset: -1,
    // combineNestedSvgPaths: false,
    disableMultiStroke: type !== "double",
    disableMultiStrokeFill: false,
    seed,
    ...overrides
  };
}
function parsePadding(config) {
  const p = config.padding;
  if (p || p === 0) {
    if (typeof p === "number") {
      return [p, p, p, p];
    } else if (Array.isArray(p)) {
      const pa = p;
      if (pa.length) {
        switch (pa.length) {
          case 4:
            return [...pa];
          case 1:
            return [pa[0], pa[0], pa[0], pa[0]];
          case 2:
            return [...pa, ...pa];
          case 3:
            return [...pa, pa[1]];
          default:
            return [pa[0], pa[1], pa[2], pa[3]];
        }
      }
    }
  }
  return [5, 5, 5, 5];
}
function renderAnnotation(svg, rect, config, animationGroupDelay, animationDuration, seed) {
  const opList = [];
  let strokeWidth = config.strokeWidth || 2;
  const padding = parsePadding(config);
  const animate = config.animate === void 0 ? true : !!config.animate;
  const iterations = config.iterations || 2;
  const rtl = config.rtl ? 1 : 0;
  const o = getOptions("single", seed, config);
  switch (config.type) {
    case "underline": {
      const y = rect.y + rect.h + padding[2];
      for (let i = rtl; i < iterations + rtl; i++) {
        if (i % 2)
          opList.push(line(rect.x + rect.w, y, rect.x, y, o));
        else
          opList.push(line(rect.x, y, rect.x + rect.w, y, o));
      }
      break;
    }
    case "strike-through": {
      const y = rect.y + rect.h / 2;
      for (let i = rtl; i < iterations + rtl; i++) {
        if (i % 2)
          opList.push(line(rect.x + rect.w, y, rect.x, y, o));
        else
          opList.push(line(rect.x, y, rect.x + rect.w, y, o));
      }
      break;
    }
    case "box": {
      const x = rect.x - padding[3];
      const y = rect.y - padding[0];
      const width = rect.w + (padding[1] + padding[3]);
      const height = rect.h + (padding[0] + padding[2]);
      for (let i = 0; i < iterations; i++)
        opList.push(rectangle(x, y, width, height, o));
      break;
    }
    case "bracket": {
      const brackets = Array.isArray(config.brackets) ? config.brackets : config.brackets ? [config.brackets] : ["right"];
      const lx = rect.x - padding[3] * 2;
      const rx = rect.x + rect.w + padding[1] * 2;
      const ty = rect.y - padding[0] * 2;
      const by = rect.y + rect.h + padding[2] * 2;
      for (const br of brackets) {
        let points;
        switch (br) {
          case "bottom":
            points = [
              [lx, rect.y + rect.h],
              [lx, by],
              [rx, by],
              [rx, rect.y + rect.h]
            ];
            break;
          case "top":
            points = [
              [lx, rect.y],
              [lx, ty],
              [rx, ty],
              [rx, rect.y]
            ];
            break;
          case "left":
            points = [
              [rect.x, ty],
              [lx, ty],
              [lx, by],
              [rect.x, by]
            ];
            break;
          case "right":
            points = [
              [rect.x + rect.w, ty],
              [rx, ty],
              [rx, by],
              [rect.x + rect.w, by]
            ];
            break;
        }
        if (points)
          opList.push(linearPath(points, false, o));
      }
      break;
    }
    case "crossed-off": {
      const x = rect.x;
      const y = rect.y;
      const x2 = x + rect.w;
      const y2 = y + rect.h;
      for (let i = rtl; i < iterations + rtl; i++) {
        if (i % 2)
          opList.push(line(x2, y2, x, y, o));
        else
          opList.push(line(x, y, x2, y2, o));
      }
      for (let i = rtl; i < iterations + rtl; i++) {
        if (i % 2)
          opList.push(line(x, y2, x2, y, o));
        else
          opList.push(line(x2, y, x, y2, o));
      }
      break;
    }
    case "circle": {
      const doubleO = getOptions("double", seed, config);
      const width = rect.w + (padding[1] + padding[3]);
      const height = rect.h + (padding[0] + padding[2]);
      const x = rect.x - padding[3] + width / 2;
      const y = rect.y - padding[0] + height / 2;
      const fullItr = Math.floor(iterations / 2);
      const singleItr = iterations - fullItr * 2;
      for (let i = 0; i < fullItr; i++)
        opList.push(ellipse(x, y, width, height, doubleO));
      for (let i = 0; i < singleItr; i++)
        opList.push(ellipse(x, y, width, height, o));
      break;
    }
    case "highlight": {
      const o2 = getOptions("highlight", seed, config);
      strokeWidth = rect.h * 0.95;
      const y = rect.y + rect.h / 2;
      for (let i = rtl; i < iterations + rtl; i++) {
        if (i % 2)
          opList.push(line(rect.x + rect.w, y, rect.x, y, o2));
        else
          opList.push(line(rect.x, y, rect.x + rect.w, y, o2));
      }
      break;
    }
  }
  if (opList.length) {
    const pathStrings = opsToPath(opList);
    const lengths = [];
    const pathElements = [];
    let totalLength = 0;
    const setAttr = (p, an, av) => p.setAttribute(an, av);
    for (const d of pathStrings) {
      const path = document.createElementNS(SVG_NS, "path");
      setAttr(path, "d", d);
      setAttr(path, "fill", "none");
      setAttr(path, "stroke", config.color || "currentColor");
      setAttr(path, "stroke-width", `${strokeWidth}`);
      if (config.opacity !== void 0)
        setAttr(path, "style", `opacity:${config.opacity}`);
      if (animate) {
        const length = path.getTotalLength();
        lengths.push(length);
        totalLength += length;
      }
      svg.appendChild(path);
      pathElements.push(path);
    }
    if (animate) {
      let durationOffset = 0;
      for (let i = 0; i < pathElements.length; i++) {
        const path = pathElements[i];
        const length = lengths[i];
        const duration = totalLength ? animationDuration * (length / totalLength) : 0;
        const delay = animationGroupDelay + durationOffset;
        const style = path.style;
        style.strokeDashoffset = `${length}`;
        style.strokeDasharray = `${length}`;
        style.animation = `rough-notation-dash ${duration}ms ease-out ${delay}ms forwards`;
        durationOffset += duration;
      }
      return sleep(animationDuration + animationGroupDelay);
    }
  }
  return sleep(0);
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function opsToPath(opList) {
  const paths = [];
  for (const drawing of opList) {
    let path = "";
    for (const item of drawing.ops) {
      const data = item.data;
      switch (item.op) {
        case "move":
          if (path.trim())
            paths.push(path.trim());
          path = `M${data[0]} ${data[1]} `;
          break;
        case "bcurveTo":
          path += `C${data[0]} ${data[1]}, ${data[2]} ${data[3]}, ${data[4]} ${data[5]} `;
          break;
        case "lineTo":
          path += `L${data[0]} ${data[1]} `;
          break;
      }
    }
    if (path.trim())
      paths.push(path.trim());
  }
  return paths;
}

function ensureKeyframes() {
  if (!window.__rno_kf_s) {
    const style = window.__rno_kf_s = document.createElement("style");
    style.textContent = `@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }`;
    document.head.appendChild(style);
  }
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class RoughAnnotationImpl {
  constructor(e, config) {
    __publicField(this, "_state", "unattached");
    __publicField(this, "_config");
    __publicField(this, "_resizing", false);
    __publicField(this, "_ro");
    // ResizeObserver is not supported in typescript std lib yet
    __publicField(this, "_seed", randomSeed());
    __publicField(this, "_e");
    __publicField(this, "_svg");
    __publicField(this, "_lastSizes", []);
    __publicField(this, "_animationDelay", 0);
    __publicField(this, "_resizeListener", () => {
      if (!this._resizing) {
        this._resizing = true;
        setTimeout(() => {
          this._resizing = false;
          if (this._state === "showing") {
            if (this.haveRectsChanged())
              this.show();
          }
        }, 400);
      }
    });
    __publicField(this, "pendingRefresh");
    this._e = e;
    this._config = JSON.parse(JSON.stringify(config));
    this.attach();
  }
  getConfig(key) {
    return this._config[key];
  }
  setConfig(key, value) {
    if (this._config[key] !== value) {
      this._config[key] = value;
      this.refresh();
    }
  }
  get animate() {
    return this._config.animate;
  }
  set animate(value) {
    this._config.animate = value;
  }
  get animationDuration() {
    return this._config.animationDuration;
  }
  set animationDuration(value) {
    this._config.animationDuration = value;
  }
  get iterations() {
    return this._config.iterations;
  }
  set iterations(value) {
    this._config.iterations = value;
  }
  get color() {
    return this._config.color;
  }
  set color(value) {
    if (this._config.color !== value) {
      this._config.color = value;
      this.refresh();
    }
  }
  get class() {
    return this._config.class;
  }
  set class(value) {
    if (this._config.class !== value) {
      this._config.class = value;
      if (this._svg)
        this._svg.setAttribute("class", ["rough-annotation", this._config.class || ""].filter(Boolean).join(" "));
    }
  }
  get strokeWidth() {
    return this._config.strokeWidth;
  }
  set strokeWidth(value) {
    if (this._config.strokeWidth !== value) {
      this._config.strokeWidth = value;
      this.refresh();
    }
  }
  get padding() {
    return this._config.padding;
  }
  set padding(value) {
    if (this._config.padding !== value) {
      this._config.padding = value;
      this.refresh();
    }
  }
  attach() {
    if (this._state === "unattached" && this._e.parentElement) {
      ensureKeyframes();
      const svg = this._svg = document.createElementNS(SVG_NS, "svg");
      svg.setAttribute("class", ["rough-annotation", this._config.class || ""].filter(Boolean).join(" "));
      const style = svg.style;
      style.position = "absolute";
      style.top = "0";
      style.left = "0";
      style.overflow = "visible";
      style.pointerEvents = "none";
      style.width = "100px";
      style.height = "100px";
      const prepend = this._config.type === "highlight";
      this._e.insertAdjacentElement(prepend ? "beforebegin" : "afterend", svg);
      this._state = "not-showing";
      if (prepend) {
        const computedPos = window.getComputedStyle(this._e).position;
        const unpositioned = !computedPos || computedPos === "static";
        if (unpositioned)
          this._e.style.position = "relative";
      }
      this.attachListeners();
    }
  }
  detachListeners() {
    window.removeEventListener("resize", this._resizeListener);
    if (this._ro)
      this._ro.unobserve(this._e);
  }
  attachListeners() {
    this.detachListeners();
    window.addEventListener("resize", this._resizeListener, { passive: true });
    if (!this._ro && "ResizeObserver" in window) {
      this._ro = new window.ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentRect)
            this._resizeListener();
        }
      });
    }
    if (this._ro)
      this._ro.observe(this._e);
  }
  haveRectsChanged() {
    if (this._lastSizes.length) {
      const newRects = this.rects();
      if (newRects.length === this._lastSizes.length) {
        for (let i = 0; i < newRects.length; i++) {
          if (!this.isSameRect(newRects[i], this._lastSizes[i]))
            return true;
        }
      } else {
        return true;
      }
    }
    return false;
  }
  isSameRect(rect1, rect2) {
    const si = (a, b) => Math.round(a) === Math.round(b);
    return si(rect1.x, rect2.x) && si(rect1.y, rect2.y) && si(rect1.w, rect2.w) && si(rect1.h, rect2.h);
  }
  isShowing() {
    return this._state !== "not-showing";
  }
  refresh() {
    if (this.isShowing() && !this.pendingRefresh) {
      this.pendingRefresh = Promise.resolve().then(() => {
        if (this.isShowing())
          this.show();
        delete this.pendingRefresh;
      });
    }
  }
  async show() {
    switch (this._state) {
      case "unattached":
        break;
      case "showing":
        this.hide();
        if (this._svg)
          await this.render(this._svg, true);
        break;
      case "not-showing":
        this.attach();
        if (this._svg)
          await this.render(this._svg, false);
        break;
    }
  }
  hide() {
    if (this._svg) {
      while (this._svg.lastChild)
        this._svg.removeChild(this._svg.lastChild);
    }
    this._state = "not-showing";
  }
  remove() {
    if (this._svg && this._svg.parentElement)
      this._svg.parentElement.removeChild(this._svg);
    this._svg = void 0;
    this._state = "unattached";
    this.detachListeners();
  }
  async render(svg, ensureNoAnimation) {
    let config = this._config;
    if (ensureNoAnimation) {
      config = JSON.parse(JSON.stringify(this._config));
      config.animate = false;
    }
    const rects = this.rects();
    let totalWidth = 0;
    rects.forEach((rect) => totalWidth += rect.w);
    const totalDuration = config.animationDuration || DEFAULT_ANIMATION_DURATION;
    let delay = 0;
    const promises = [];
    for (let i = 0; i < rects.length; i++) {
      const rect = rects[i];
      const ad = totalDuration * (rect.w / totalWidth);
      promises.push(
        renderAnnotation(svg, rects[i], config, delay + this._animationDelay + (this._config.delay || 0), ad, this._seed)
      );
      delay += ad;
    }
    this._lastSizes = rects;
    this._state = "showing";
    return await Promise.all(promises);
  }
  rects() {
    const ret = [];
    if (this._svg) {
      if (this._config.multiline) {
        const elementRects = this._e.getClientRects();
        for (let i = 0; i < elementRects.length; i++)
          ret.push(this.svgRect(this._svg, elementRects[i]));
      } else {
        ret.push(this.svgRect(this._svg, this._e.getBoundingClientRect()));
      }
    }
    return ret;
  }
  svgRect(svg, bounds) {
    const rect1 = svg.getBoundingClientRect();
    const rect2 = bounds;
    return {
      x: (rect2.x || rect2.left) - (rect1.x || rect1.left),
      y: (rect2.y || rect2.top) - (rect1.y || rect1.top),
      w: rect2.width,
      h: rect2.height
    };
  }
}
function annotate(element, config) {
  return new RoughAnnotationImpl(element, config);
}
function annotationGroup(annotations) {
  let delay = 0;
  for (const a of annotations) {
    const ai = a;
    ai._animationDelay = delay;
    const duration = ai.animationDuration === 0 ? 0 : ai.animationDuration || DEFAULT_ANIMATION_DURATION;
    delay += duration;
  }
  const list = [...annotations];
  return {
    show() {
      for (const a of list)
        a.show();
    },
    hide() {
      for (const a of list)
        a.hide();
    }
  };
}

export { annotate, annotationGroup };
