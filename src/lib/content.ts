import { getCollection, type CollectionEntry } from 'astro:content';
import type { LoopId, PhaseId } from '../data/taxonomy';
import { PHASE_IDS } from '../data/taxonomy';

export type Lesson = CollectionEntry<'lessons'>;
export type ThemeEntry = CollectionEntry<'themes'>;

export async function getLessons(): Promise<Lesson[]> {
  const all = await getCollection('lessons');
  return all.sort((a, b) => a.data.no.localeCompare(b.data.no));
}

export async function getThemes(): Promise<ThemeEntry[]> {
  const all = await getCollection('themes');
  return all.sort((a, b) => a.data.order - b.data.order);
}

export const lessonHref = (l: Lesson) => `/lessons/${l.id}/`;

export function lessonsByPhase(lessons: Lesson[], phase: PhaseId) {
  return lessons.filter((l) => l.data.phase === phase);
}

export function lessonsByLoop(lessons: Lesson[], loop: LoopId) {
  return lessons.filter((l) => l.data.loops.includes(loop));
}

export function lessonsByNos(lessons: Lesson[], nos: string[]) {
  return nos.map((n) => lessons.find((l) => l.data.no === n)).filter((l): l is Lesson => Boolean(l));
}

export function phaseOrder(p: PhaseId) {
  return PHASE_IDS.indexOf(p);
}

/** Markdown から検索・抜粋用のプレーンテキストを作る */
export function plainText(md: string): string {
  return md
    .replace(/^---[\s\S]*?---/, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`|]/g, ' ')
    .replace(/-{3,}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
