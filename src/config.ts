/**
 * サイト全体の設定。公開URLやサイト名を変える場合はここだけを編集する。
 */
export const SITE = {
  name: 'マイクロ法人経営マップ',
  tagline: 'ヘルスケア・ウェルビーイング領域で、小さく強い会社をつくる',
  description:
    'ヘルスケア・ウェルビーイング領域でマイクロ法人を営む・目指す専門職のための学習サイト。0→1・1→10・10→100のフェーズ別に、好きなタイミングで好きなところから学べます。',
  /** Cloudflare Pages の Custom domains に設定するホスト名 */
  url: 'https://biz.management.hiluco.net',
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
  contactUrl: 'https://hiluco.jp/',
  contactLabel: '株式会社HILUCO（hiluco.jp）',
  /** サイト本文の最終確認日 */
  reviewedAt: '2026-10-11',
  version: 'v0.1（草案）',
} as const;
