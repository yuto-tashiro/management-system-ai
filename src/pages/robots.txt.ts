import type { APIRoute } from 'astro';
import { SITE } from '../config';

export const GET: APIRoute = () => {
  const body = SITE.indexable
    ? `User-agent: *\nAllow: /\n`
    : `# 公開前レビュー中のため、検索エンジンへの掲載を止めています（src/config.ts の indexable）\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
