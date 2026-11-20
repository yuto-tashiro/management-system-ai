/**
 * サイト全体の設定。公開URLやサイト名を変える場合はここだけを編集する。
 */
export const SITE = {
  name: '事業推進マップ',
  tagline: '自分の事業を、自分で考えるために',
  description:
    'ヘルスケア・ウェルビーイング領域の事業チームと専門職のための学習サイト。始める・伸ばす・直す・続けるための考え方を、12の講座と実践ワークで学べます。',
  /** Cloudflare Workers の Custom Domain に設定するホスト名 */
  url: 'https://biz.management.hiluco.net',
  methodsUrl: 'https://hiluco.net/',
  clientworkUrl: 'https://clientwork.hiluco.net/',
  researchUrl: 'https://cpt.hiluco.net/',
  corporateUrl: 'https://hiluco.jp/',
  /** 運営 */
  publisher: '株式会社HILUCO',
  /**
   * 検索エンジンへの掲載を許可するか。
   * 公開前レビュー（/about/ のチェックリスト）が終わるまでは false にしておく。
   */
  indexable: false,
  /** 総論（note教材）のURL。未設定なら空文字のまま */
  soronUrl: '',
  /** 訂正・問い合わせ先 */
  contactUrl: 'https://hiluco.jp/contact',
  contactLabel: '株式会社HILUCO（hiluco.jp）',
  /** サイト本文の最終確認日 */
  reviewedAt: '2026-10-11',
  version: 'v0.1（草案）',
} as const;
