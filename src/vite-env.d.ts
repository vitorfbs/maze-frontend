/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

/**
 *  @external https://vitejs.dev/guide/env-and-mode.html
 */
interface ImportMetaEnv {
  readonly VITE_GOOGLE_MAPS_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export {};

declare global {
  interface Window {
    netlifyIdentity: any;
  }
}
