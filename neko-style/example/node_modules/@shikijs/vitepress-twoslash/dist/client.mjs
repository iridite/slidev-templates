import FloatingVue, { recomputeAllPoppers } from 'floating-vue';

const isMobile = typeof navigator !== "undefined" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const TwoslashFloatingVue = {
  install: (app, options = {}) => {
    if (typeof window !== "undefined") {
      window.addEventListener("click", (e) => {
        const path = e.composedPath();
        if (path.some((el) => el?.classList?.contains?.("vp-code-group") || el?.classList?.contains?.("tabs")))
          recomputeAllPoppers();
      }, { passive: true });
    }
    app.use(FloatingVue, {
      ...options,
      themes: {
        "twoslash": {
          $extend: "dropdown",
          triggers: isMobile ? ["touch"] : ["hover", "touch"],
          popperTriggers: isMobile ? ["touch"] : ["hover", "touch"],
          placement: "bottom-start",
          overflowPadding: 10,
          delay: 0,
          handleResize: false,
          autoHide: true,
          instantMove: true,
          flip: false,
          arrowPadding: 8,
          autoBoundaryMaxSize: true
        },
        "twoslash-query": {
          $extend: "twoslash",
          triggers: ["click"],
          popperTriggers: ["click"],
          autoHide: false
        },
        "twoslash-completion": {
          $extend: "twoslash-query",
          triggers: ["click"],
          popperTriggers: ["click"],
          autoHide: false,
          distance: 0,
          arrowOverflow: true
        },
        ...options.theme
      }
    });
  }
};

export { TwoslashFloatingVue as default };
