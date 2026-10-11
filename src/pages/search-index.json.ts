import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getLessons, getThemes, plainText } from '../lib/content';
import { LOOPS } from '../data/loops';
import { WORKSHEETS } from '../data/worksheets';
import { BOOKS } from '../data/books';
import { TERMS } from '../data/glossary';
import { SYMPTOMS } from '../data/symptoms';
import { CASES } from '../data/cases';
import { LOOP_NAMES, PHASES } from '../data/taxonomy';

/** 検索用の静的インデックス（ビルド時に生成） */
export const GET: APIRoute = async () => {
  const docs: { t: string; u: string; k: string; s: string; b: string }[] = [];
  const clip = (s: string, n = 4000) => (s.length > n ? s.slice(0, n) : s);

  for (const l of await getLessons()) {
    docs.push({ t: `講座${l.data.no} ${l.data.title}`, u: `/lessons/${l.id}/`, k: '講座', s: l.data.summary, b: clip(`${l.data.goal} ${plainText(l.body ?? '')}`) });
  }
  for (const p of await getCollection('phases')) {
    docs.push({ t: p.data.title, u: `/phases/${p.data.phase}/`, k: 'フェーズ', s: p.data.summary, b: clip(`${PHASES[p.data.phase].question} ${plainText(p.body ?? '')}`) });
  }
  for (const t of await getThemes()) {
    docs.push({ t: t.data.title, u: `/themes/${t.id}/`, k: '横断テーマ', s: t.data.summary, b: clip(plainText(t.body ?? '')) });
  }
  for (const l of LOOPS) {
    docs.push({
      t: `${LOOP_NAMES[l.id].en}（${LOOP_NAMES[l.id].ja}）｜${l.question}`,
      u: `/loops/${l.id}/`,
      k: '経営ループ',
      s: l.summary,
      b: clip([l.theory, ...l.keyIdeas.map((k) => `${k.title} ${k.body}`), ...l.practices, l.ai, l.symptom].join(' ')),
    });
  }
  for (const w of WORKSHEETS) {
    docs.push({ t: w.title, u: `/worksheets/${w.id}/`, k: 'ワークシート', s: w.purpose, b: clip(w.fields.map((f) => `${f.label} ${f.hint ?? ''}`).join(' ')) });
  }
  for (const s of SYMPTOMS) {
    docs.push({ t: s.title, u: `/symptoms/#${s.id}`, k: '悩み', s: s.prescription, b: `${s.signs} ${s.cause}` });
  }
  for (const c of CASES) {
    docs.push({ t: c.title, u: `/cases/#${c.id}`, k: c.kind === 'real' ? 'ケース（実例）' : 'ケース（仮例）', s: c.learning, b: `${c.situation} ${c.action}` });
  }
  for (const term of TERMS) {
    docs.push({ t: term.term, u: `/glossary/#${term.id}`, k: '用語', s: term.body, b: term.en ?? '' });
  }
  for (const b of BOOKS) {
    docs.push({
      t: b.title,
      u: `/library/?q=${encodeURIComponent(b.title)}`,
      k: '文献',
      s: b.summary,
      b: `${b.subtitle ?? ''} ${b.authors} ${b.publisher ?? ''} ${b.use}`,
    });
  }
  const statics = [
    { t: 'はじめに：このサイトの使い方', u: '/start/', s: '5つの入り方、フェーズとループ、変換ラダー、三層構造、根拠ラベル' },
    { t: 'フェーズ・ループ診断', u: '/diagnosis/', s: '事業ごとのフェーズと、8つの経営ループのうち最も弱いところを確かめる' },
    { t: '90日でマイクロ法人のOSをつくる', u: '/plan-90/', s: '自社を理解する→一つの専門性を仕組みに変える→新しい事業実験を行う' },
    { t: '根拠と運営方針', u: '/about/', s: '根拠ラベル、ヘルスケアの編集基準、AI利用方針、訂正' },
  ];
  statics.forEach((x) => docs.push({ ...x, k: 'ページ', b: '' }));

  return new Response(JSON.stringify(docs), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
