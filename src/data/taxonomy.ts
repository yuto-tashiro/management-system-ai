/**
 * サイト全体で使う分類（フェーズ・経営ループ・根拠ラベル）。
 * 講座や文献の frontmatter / データはここで定義した ID を参照する。
 */

export const PHASE_IDS = ['0-1', '1-10', '10-100'] as const;
export type PhaseId = (typeof PHASE_IDS)[number];

export interface Phase {
  id: PhaseId;
  label: string;
  name: string;
  /** 到達点（一文） */
  reach: string;
  /** 中核の問い */
  question: string;
  /** 学習者が作るもの */
  outputs: string;
  /** 卒業条件（目安） */
  graduation: string[];
}

export const PHASES: Record<PhaseId, Phase> = {
  '0-1': {
    id: '0-1',
    label: '0→1',
    name: '探索',
    reach: '手持ちの資源で、誰かから継続的に対価を受け取れる状態をつくる',
    question: '誰の、どんな困りごとに、いま持っているものだけで最初の対価をもらえるか。',
    outputs: 'ビジョンの仮説、資源の棚卸し、顧客仮説、有償実験の計画、初回提供の記録',
    graduation: [
      '継続的に対価を払ってくれる顧客が複数いる',
      '収入源が2本以上あり、1本が止まっても事業が続く',
      '伸ばしたい得意領域を1つ言葉にできる',
    ],
  },
  '1-10': {
    id: '1-10',
    label: '1→10',
    name: '再現',
    reach: '伸びる理由を説明でき、自分以外でも同じ品質で提供できる状態をつくる',
    question: '試したもののうち、どれが、なぜ伸びるのか。それを自分以外でも再現できるか。',
    outputs: '実験台帳、採算モデル、サービス標準、営業プロセス、品質指標',
    graduation: [
      '主力サービスの対象・手順・評価指標が文書になっている',
      '経営者以外が提供した実績があり、品質の差を把握している',
      '売上の一部が、経営者の稼働に比例しない収入源から生まれている',
    ],
  },
  '10-100': {
    id: '10-100',
    label: '10→100',
    name: '組織化',
    reach: '経営者がいなくても価値が生まれ続け、社会の変化に合わせて形を変えられる状態をつくる',
    question: '自分がいなくても続くか。10年後の社会で、この事業はどんな形で必要とされているか。',
    outputs: '役割・意思決定の取り決め、パートナー合意、リスク台帳、複数シナリオ、無形資産計画',
    graduation: [
      '理念・守る倫理・やらないことが短い文書になっている',
      '5つの責任（顧客理解・品質・知識・資金・実験）の最終責任者が決まっている',
      '探索に使う時間と予算が、先にカレンダーと予算表に入っている',
      'パートナー網の参加条件・品質・還元・知財のルールが明文化されている',
      '継続・承継・売却・休眠のどれを選んでも困らないよう、資産と契約が整理されている',
    ],
  },
};

export const LOOP_IDS = [
  'search',
  'position',
  'experiment',
  'serve',
  'learn',
  'trust',
  'systemize',
  'renew',
] as const;
export type LoopId = (typeof LOOP_IDS)[number];

export const LOOP_NAMES: Record<LoopId, { en: string; ja: string }> = {
  search: { en: 'SEARCH', ja: '探索' },
  position: { en: 'POSITION', ja: '位置取り' },
  experiment: { en: 'EXPERIMENT', ja: '実験' },
  serve: { en: 'SERVE', ja: '価値提供' },
  learn: { en: 'LEARN', ja: '学習' },
  trust: { en: 'TRUST', ja: '信頼' },
  systemize: { en: 'SYSTEMIZE', ja: '仕組み化' },
  renew: { en: 'RENEW', ja: '更新' },
};

/** 根拠ラベル。研究・公的指針・書籍の提案・社内仮説を混同しないために全ページで使う */
export const EVIDENCE_IDS = ['guideline', 'research', 'book', 'hypothesis', 'verified'] as const;
export type EvidenceId = (typeof EVIDENCE_IDS)[number];

export const EVIDENCE: Record<EvidenceId, { label: string; meaning: string; example: string }> = {
  guideline: {
    label: '公的指針',
    meaning: '政府・国際機関が、対象と目的を明示して示す指針。版・改訂日・対象範囲をあわせて確認する。',
    example: '厚生労働省「健康づくりのための身体活動・運動ガイド2023」。対象別の推奨と適用上の注意を確認する。',
  },
  research: {
    label: '研究知見',
    meaning: '査読論文や研究レビュー。研究デザイン、対象、限界、再現性を示す。',
    example: '研究で観察された関連。あなたのサービスの因果効果を直接示すとは限らない。',
  },
  book: {
    label: '実務書の枠組み',
    meaning: '経営者・実務者・研究者が書籍で提示する方法や経験則。査読済みの効果証明と混同しない。',
    example: 'エフェクチュエーションの原則を、自社の小さな実験の設計に使う。',
  },
  hypothesis: {
    label: 'HILUCOの実務仮説',
    meaning: '現場で検証する前のやり方・予想。必ず「未検証」と記す。',
    example: 'この提案の型で、初回商談後の手戻りが減るかを次の案件で確かめる。',
  },
  verified: {
    label: 'HILUCOの検証済み手順',
    meaning: '対象案件・記録・判定基準・修正履歴にもとづいて運用中の手順。適用条件と観察期間を示す。',
    example: '案件数、適用条件、観察期間、例外を示したうえで、公開するかを個別に判断する。',
  },
};

/** 講座の状態 */
export const STATUS_LABELS = {
  draft: '草案',
  review: 'レビュー中',
  published: '公開',
} as const;
export type StatusId = keyof typeof STATUS_LABELS;
