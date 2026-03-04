import { TransitionGroupProps, App, Ref } from 'vue';
import { Awaitable } from '@antfu/utils';
import * as monaco from 'monaco-editor';
import { Router } from 'vue-router';
import mermaid from 'mermaid';
import { KatexOptions } from 'katex';
import { CodeToHastOptions, Highlighter } from 'shiki';
import { VitePluginConfig } from 'unocss/vite';

interface CommonArgs {
    entry: string;
    theme?: string;
}
interface ExportArgs extends CommonArgs {
    output?: string;
    format?: string;
    timeout?: number;
    range?: string;
    dark?: boolean;
    'with-clicks'?: boolean;
    'executable-path'?: string;
    'with-toc'?: boolean;
    'per-slide'?: boolean;
    scale?: number;
}
interface BuildArgs extends ExportArgs {
    watch: boolean;
    out: string;
    base?: string;
    download?: boolean;
    inspect: boolean;
}

interface SlidevConfig {
    title: string;
    /**
     * String template to compose title
     *
     * @example "%s - Slidev" - to suffix " - Slidev" to all pages
     * @default '%s - Slidev'
     */
    titleTemplate: string;
    /**
     * Theme to use for the slides
     *
     * @see https://sli.dev/themes/use.html
     * @default 'default'
     */
    theme: string;
    /**
     * List of Slidev addons
     *
     * @default []
     */
    addons: string[];
    /**
     * Download remote assets in local using vite-plugin-remote-assets
     *
     * @default false
     */
    remoteAssets: boolean | 'dev' | 'build';
    /**
     * Enable Monaco
     *
     * @see https://sli.dev/custom/config-monaco.html
     * @default 'dev'
     */
    monaco: boolean | 'dev' | 'build';
    /**
     * Show a download button in the SPA build,
     * could also be a link to custom pdf
     *
     * @default false
     */
    download: boolean | string;
    /**
     * Options for export
     *
     * @default {}
     */
    export: ResolvedExportOptions;
    /**
     * Show a copy button in code blocks
     *
     * @default true
     */
    codeCopy: boolean;
    /**
     * Information shows on the built SPA
     * Can be a markdown string
     *
     * @default false
     */
    info: string | boolean;
    /**
     * Prefer highlighter
     *
     * @see https://sli.dev/custom/highlighters.html
     * @default shiki
     */
    highlighter: 'prism' | 'shiki';
    /**
     * Show line numbers in code blocks
     *
     * @default false
     */
    lineNumbers: boolean;
    /**
     * Force slides color schema
     *
     * @default 'auto'
     */
    colorSchema: 'dark' | 'light' | 'all' | 'auto';
    /**
     * Router mode for vue-router
     *
     * @default 'history'
     */
    routerMode: 'hash' | 'history';
    /**
     * Aspect ratio for slides
     * should be like `16/9` or `1:1`
     *
     * @default '16/9'
     */
    aspectRatio: number;
    /**
     * The actual width for slides canvas.
     * unit in px.
     *
     * @default '980'
     */
    canvasWidth: number;
    /**
     * Force the filename used when exporting the presentation.
     * The extension, e.g. .pdf, gets automatically added.
     *
     * @default ''
     */
    exportFilename: string | null;
    /**
     * Controls whether texts in slides are selectable
     *
     * @default true
     */
    selectable: boolean;
    /**
     * Configure for themes, will inject intro root styles as
     * `--slidev-theme-x` for attribute `x`
     *
     * This allows themes to have customization options in frontmatter
     * Refer to themes' document for options avaliable
     *
     * @default {}
     */
    themeConfig: SlidevThemeConfig;
    /**
     * Configure fonts for the slides and app
     *
     * @default {}
     */
    fonts: ResolvedFontOptions;
    /**
     * Configure the icon for app
     *
     * @default 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
     */
    favicon: string;
    /**
     * Options for drawings
     *
     * @default {}
     */
    drawings: ResolvedDrawingsOptions;
    /**
     * URL of PlantUML server used to render diagrams
     *
     * @default https://www.plantuml.com/plantuml
     */
    plantUmlServer: string;
    /**
     * Enable slides recording
     *
     * @default 'dev'
     */
    record: boolean | 'dev' | 'build';
    /**
     * Expose the server to inbound requests (listen to `0.0.0.0`)
     *
     * Pass a string to set the password for accessing presenter mode.
     *
     * @default false
     */
    remote?: string | boolean;
    /**
     * Engine for Atomic CSS
     *
     * @see https://unocss.dev/
     * @default 'unocss'
     */
    css: 'unocss' | 'none';
    /**
     * Enable presenter mode
     *
     * @default true
     */
    presenter: boolean | 'dev' | 'build';
    /**
     * Attributes to apply to the HTML element
     *
     * @default {}
     */
    htmlAttrs: Record<string, string>;
    /**
     * Page transition, powered by Vue's <TransitionGroup/>
     *
     * Built-in transitions:
     * - fade
     * - fade-out
     * - slide-left
     * - slide-right
     * - slide-up
     * - slide-down
     *
     * @see https://sli.dev/guide/animations.html#pages-transitions
     * @see https://vuejs.org/guide/built-ins/transition.html
     */
    transition?: BuiltinSlideTransition | string | TransitionGroupProps;
    /**
     * Suppport MDC syntax
     *
     * @see https://github.com/antfu/markdown-it-mdc
     * @see https://content.nuxtjs.org/guide/writing/mdc
     * @experimental
     * @default false
     */
    mdc?: boolean;
    /**
     * Enable built-in editor
     *
     * @default true
     */
    editor: boolean;
}
interface FontOptions {
    /**
     * Sans serif fonts (default fonts for most text)
     */
    sans?: string | string[];
    /**
     * Serif fonts
     */
    serif?: string | string[];
    /**
     * Monospace fonts, for code blocks and etc.
     */
    mono?: string | string[];
    /**
     * Load webfonts for custom CSS (does not apply anywhere by default)
     */
    custom?: string | string[];
    /**
     * Weights for fonts
     *
     * @default [200, 400, 600]
     */
    weights?: string | (string | number)[];
    /**
     * Import italic fonts
     *
     * @default false
     */
    italic?: boolean;
    /**
     * @default 'google'
     */
    provider?: 'none' | 'google';
    /**
     * Specify web fonts names, will detect from `sans`, `mono`, `serif` if not provided
     */
    webfonts?: string[];
    /**
     * Specify local fonts names, be excluded from webfonts
     */
    local?: string[];
    /**
     * Use fonts fallback
     *
     * @default true
     */
    fallbacks?: boolean;
}
interface DrawingsOptions {
    /**
     * Persist the drawings to disk
     * Passing string to specify the directory (default to `.slidev/drawings`)
     *
     * @default false
     */
    persist?: boolean | string;
    /**
     * @default true
     */
    enabled?: boolean | 'dev' | 'build';
    /**
     * Only allow drawing from presenter mode
     *
     * @default false
     */
    presenterOnly?: boolean;
    /**
     * Sync drawing for all instances
     *
     * @default true
     */
    syncAll?: boolean;
}
interface ResolvedFontOptions {
    sans: string[];
    mono: string[];
    serif: string[];
    weights: string[];
    italic: boolean;
    provider: 'none' | 'google';
    webfonts: string[];
    local: string[];
}
interface ResolvedDrawingsOptions {
    persist: string | false;
    enabled: boolean | 'dev' | 'build';
    presenterOnly: boolean;
    syncAll: boolean;
}
interface ResolvedExportOptions extends Omit<ExportArgs, 'entry' | 'theme'> {
    withClicks?: boolean;
    executablePath?: string;
    withToc?: boolean;
}
type BuiltinSlideTransition = 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'fade' | 'zoom' | 'none';

type FrontmatterStyle = 'frontmatter' | 'yaml';
interface SlideInfoBase {
    raw: string;
    content: string;
    note?: string;
    frontmatter: Record<string, any>;
    frontmatterRaw?: string;
    frontmatterStyle?: FrontmatterStyle;
    title?: string;
    level?: number;
}
interface SlideInfo extends SlideInfoBase {
    index: number;
    start: number;
    end: number;
    inline?: SlideInfoBase;
    source?: SlideInfoWithPath;
    snippetsUsed?: LoadedSnippets;
}
interface SlideInfoWithPath extends SlideInfoBase {
    filepath: string;
}
interface SlideInfoExtended extends SlideInfo {
    noteHTML: string;
}
/**
 * Metadata for "slidev" field in themes' package.json
 */
interface SlidevThemeMeta {
    defaults?: Partial<SlidevConfig>;
    colorSchema?: 'dark' | 'light' | 'both';
    highlighter?: 'prism' | 'shiki' | 'both';
}
type SlidevThemeConfig = Record<string, string | number>;
interface SlidevFeatureFlags {
    katex: boolean;
    monaco: boolean;
    tweet: boolean;
    mermaid: boolean;
}
interface SlidevMarkdown {
    slides: SlideInfo[];
    raw: string;
    config: SlidevConfig;
    features: SlidevFeatureFlags;
    headmatter: Record<string, unknown>;
    filepath?: string;
    entries?: string[];
    themeMeta?: SlidevThemeMeta;
}
interface SlidevPreparserExtension {
    name: string;
    transformRawLines?: (lines: string[]) => Promise<void> | void;
    transformSlide?: (content: string, frontmatter: any) => Promise<string | undefined>;
}
type PreparserExtensionLoader = (headmatter?: Record<string, unknown>, filepath?: string) => Promise<SlidevPreparserExtension[]>;
type PreparserExtensionFromHeadmatter = (headmatter: any, exts: SlidevPreparserExtension[], filepath?: string) => Promise<SlidevPreparserExtension[]>;
type RenderContext = 'slide' | 'overview' | 'presenter' | 'previewNext';
type LoadedSnippets = Record<string, string>;

interface AppContext {
    app: App;
    router: Router;
}
interface MonacoSetupReturn {
    theme?: {
        light?: string;
        dark?: string;
    };
    editorOptions?: monaco.editor.IEditorOptions;
}
type MermaidOptions = (typeof mermaid.initialize) extends (a: infer A) => any ? A : never;
interface NavOperations {
    next: () => void;
    prev: () => Promise<void>;
    nextSlide: () => void;
    prevSlide: () => Promise<void>;
    go: (index: number) => void;
    goFirst: () => void;
    goLast: () => void;
    downloadPDF: () => Promise<void>;
    toggleDark: () => void;
    toggleOverview: () => void;
    toggleDrawing: () => void;
    escapeOverview: () => void;
    showGotoDialog: () => void;
}
interface ShortcutOptions {
    key: string | Ref<boolean>;
    fn?: () => void;
    autoRepeat?: boolean;
    name?: string;
}
interface ShikiContext {
    /**
     * @deprecated Pass directly the theme name it's supported by Shiki.
     * For custom themes, load it manually via `JSON.parse(fs.readFileSync(path, 'utf-8'))` and pass the raw JSON object instead.
     */
    loadTheme: (path: string) => Promise<any>;
}
type ShikiSetupReturn = Partial<CodeToHastOptions> & {
    setup?: (highlighter: Highlighter) => Awaitable<void>;
};
type ShikiSetup = (shiki: ShikiContext) => Awaitable<ShikiSetupReturn | void>;
type KatexSetup = () => Awaitable<Partial<KatexOptions> | void>;
type UnoSetup = () => Awaitable<Partial<VitePluginConfig> | void>;
type PreparserSetup = (filepath: string) => SlidevPreparserExtension;
type MonacoSetup = (m: typeof monaco) => Awaitable<MonacoSetupReturn>;
type AppSetup = (context: AppContext) => Awaitable<void>;
type MermaidSetup = () => Partial<MermaidOptions> | void;
type ShortcutsSetup = (nav: NavOperations, defaultShortcuts: ShortcutOptions[]) => Array<ShortcutOptions>;
declare function defineShikiSetup(fn: ShikiSetup): ShikiSetup;
declare function defineUnoSetup(fn: UnoSetup): UnoSetup;
declare function defineMonacoSetup(fn: MonacoSetup): MonacoSetup;
declare function defineAppSetup(fn: AppSetup): AppSetup;
declare function defineMermaidSetup(fn: MermaidSetup): MermaidSetup;
declare function defineKatexSetup(fn: KatexSetup): KatexSetup;
declare function defineShortcutsSetup(fn: ShortcutsSetup): ShortcutsSetup;
declare function definePreparserSetup(fn: PreparserSetup): PreparserSetup;

interface TocItem {
    active?: boolean;
    activeParent?: boolean;
    children: TocItem[];
    hasActiveParent?: boolean;
    level: number;
    path: string;
    hideInToc?: boolean;
    title?: string;
}

export { type AppContext, type AppSetup, type BuildArgs, type BuiltinSlideTransition, type CommonArgs, type DrawingsOptions, type ExportArgs, type FontOptions, type FrontmatterStyle, type KatexSetup, type LoadedSnippets, type MermaidOptions, type MermaidSetup, type MonacoSetup, type MonacoSetupReturn, type NavOperations, type PreparserExtensionFromHeadmatter, type PreparserExtensionLoader, type PreparserSetup, type RenderContext, type ResolvedDrawingsOptions, type ResolvedExportOptions, type ResolvedFontOptions, type ShikiContext, type ShikiSetup, type ShikiSetupReturn, type ShortcutOptions, type ShortcutsSetup, type SlideInfo, type SlideInfoBase, type SlideInfoExtended, type SlideInfoWithPath, type SlidevConfig, type SlidevFeatureFlags, type SlidevMarkdown, type SlidevPreparserExtension, type SlidevThemeConfig, type SlidevThemeMeta, type TocItem, type UnoSetup, defineAppSetup, defineKatexSetup, defineMermaidSetup, defineMonacoSetup, definePreparserSetup, defineShikiSetup, defineShortcutsSetup, defineUnoSetup };
