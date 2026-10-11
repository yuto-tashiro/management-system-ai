export interface NavItem {
  href: string;
  label: string;
}

/** ヘッダー（デスクトップ）に常時表示するもの */
export const PRIMARY_NAV: NavItem[] = [
  { href: '/start/', label: 'はじめに' },
  { href: '/phases/', label: 'フェーズ' },
  { href: '/lessons/', label: '講座' },
  { href: '/symptoms/', label: '悩みから' },
  { href: '/diagnosis/', label: '診断' },
  { href: '/worksheets/', label: 'ワーク' },
  { href: '/library/', label: '文献' },
  { href: '/search/', label: '検索' },
];

/** モバイルメニューとフッターで使うグループ */
export const NAV_GROUPS: { label: string; items: NavItem[] }[] = [
  {
    label: '学ぶ',
    items: [
      { href: '/start/', label: 'はじめに（使い方）' },
      { href: '/phases/', label: 'フェーズ別ガイド' },
      { href: '/lessons/', label: '講座一覧（12講座）' },
      { href: '/loops/', label: '8つの経営ループ' },
      { href: '/themes/', label: '横断テーマ' },
    ],
  },
  {
    label: '探す・測る',
    items: [
      { href: '/symptoms/', label: '悩みから探す' },
      { href: '/diagnosis/', label: 'フェーズ・ループ診断' },
      { href: '/search/', label: 'サイト内検索' },
    ],
  },
  {
    label: '手を動かす',
    items: [
      { href: '/plan-90/', label: '90日でOSをつくる' },
      { href: '/worksheets/', label: 'ワークシート' },
      { href: '/cases/', label: 'ケース' },
    ],
  },
  {
    label: '参照する',
    items: [
      { href: '/library/', label: '文献ライブラリ' },
      { href: '/glossary/', label: '用語集' },
      { href: '/about/', label: '根拠と運営方針' },
    ],
  },
];
