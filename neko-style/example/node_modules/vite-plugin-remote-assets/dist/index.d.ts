import { Plugin } from 'vite';

interface RemoteAssetsRule {
    /**
     * Regex to match urls, should be http:// or https://
     */
    match: RegExp;
    /**
     * Extension for the url, should by leading with `.`
     *
     * When not specified, if will try to infer from the url.
     */
    ext?: string;
}
interface RemoteAssetsOptions {
    /**
     * Directory name to store the assets from remote
     *
     * @default 'node_modules/.remote-assets'
     */
    assetsDir?: string;
    /**
     * Rules to match urls to replace
     */
    rules?: RemoteAssetsRule[];
    /**
     * Mode to resolve urls
     *
     * @default relative
     */
    resolveMode?: 'relative' | '@fs' | ((moduleId: string, url: string) => 'relative' | '@fs');
    /**
     * Wait for download before serving the content
     *
     * @default true
     */
    awaitDownload?: boolean;
    /**
     * If download returns 429, use the retry-after header to wait and retry
     *
     * @default false
     */
    retryTooManyRequests?: boolean;
}
declare const DefaultRules: RemoteAssetsRule[];
declare function VitePluginRemoteAssets(options?: RemoteAssetsOptions): Plugin;

export { DefaultRules, type RemoteAssetsOptions, type RemoteAssetsRule, VitePluginRemoteAssets, VitePluginRemoteAssets as default };
