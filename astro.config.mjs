// @ts-check
import { defineConfig } from 'astro/config';
import { SITE } from './src/config.ts';

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      // スクリプトを常に外部ファイルにする（_headers の CSP で script-src 'self' を使うため）
      assetsInlineLimit: 0,
    },
  },
});
