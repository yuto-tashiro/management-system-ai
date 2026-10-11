# マイクロ法人経営マップ

ヘルスケア・ウェルビーイング領域でマイクロ法人を営む・目指す専門職のための学習サイトです。0→1・1→10・10→100のフェーズ別に、好きなタイミングで好きなところから学べます。

- 運営：株式会社HILUCO
- 公開先（予定）：`https://biz.management.hiluco.net`（Cloudflare Workers／HILUCOアカウント）
- 技術：[Astro](https://astro.build/) 7 による静的サイト（サーバー・データベースなし）

## サイトの構成

| パス | 内容 |
| --- | --- |
| `/` | トップ。入口（フェーズ／悩み／講座／ループ／90日プラン／ワーク） |
| `/start/` | はじめに：使い方、変換ラダー、三層構造、根拠ラベル |
| `/diagnosis/` | フェーズ診断（11問）と8ループ診断（24問） |
| `/phases/` | フェーズ別ガイド（0→1／1→10／10→100） |
| `/lessons/` | 12講座とフェーズ×ループのマトリクス |
| `/loops/` | 8つの経営ループ |
| `/themes/` | 横断テーマ（雇わずに組む／ヘルスケア固有の論点／AI／事業エンジン／お金・契約） |
| `/symptoms/` | 悩みから探す（14の症状→見立て→処方） |
| `/plan-90/` | 90日でOSをつくる（チェックリスト） |
| `/worksheets/` | ワークシート17種（ブラウザで記入・印刷・Markdown保存） |
| `/library/` | 文献ライブラリ61件（指定17冊＋書籍・論文・公的資料、絞り込み可） |
| `/glossary/` | 用語集 |
| `/cases/` | ケース（実例の要旨／説明用の仮例） |
| `/about/` | 根拠と運営方針、公開前チェックリスト |
| `/search/` | サイト内検索 |

ワークシート・診断・チェックリストの入力は、閲覧者のブラウザ（localStorage）にだけ保存されます。サーバーへは何も送信しません。

## 内容を編集する

| 編集したいもの | ファイル |
| --- | --- |
| 講座（12本） | `src/content/lessons/*.md` |
| フェーズ別ガイド | `src/content/phases/*.md` |
| 横断テーマ | `src/content/themes/*.md` |
| フェーズの到達点・卒業条件、根拠ラベル | `src/data/taxonomy.ts` |
| 8つの経営ループ | `src/data/loops.ts` |
| 文献 | `src/data/books.ts` |
| ワークシート | `src/data/worksheets.ts` |
| 悩み（症状と処方） | `src/data/symptoms.ts` |
| 診断の設問 | `src/data/diagnosis.ts` |
| 90日プラン | `src/data/plan90.ts` |
| ケース | `src/data/cases.ts` |
| 用語集 | `src/data/glossary.ts` |
| サイト名・URL・公開設定 | `src/config.ts` |

講座ファイルの先頭（frontmatter）で、フェーズ・ループ・根拠（`sources`）・ワークシート・次に読む講座を指定します。`sources` の `label` は `guideline`（公的指針）／`research`（研究知見）／`book`（実務書の枠組み）／`hypothesis`（HILUCOの実務仮説）／`verified`（HILUCOの検証済み手順）のいずれかです。

更新後は `npm run deploy` で再ビルド・公開できます。GitHub連携の自動デプロイは未設定です。

## ローカルで確認する

Node.js 22.12 以上が必要です。

```bash
npm install
npm run dev      # http://localhost:4321 で確認
npm run build    # 型チェック＋本番ビルド（dist/ に出力）
npm run preview  # ビルド結果を確認
```

## Cloudflare（HILUCOアカウント）へのデプロイ

Cloudflare Workers の Static Assets で公開しています。設定は `wrangler.jsonc` に保存しています。

- Worker名：`management-system-ai`
- アカウント：HILUCO
- 本番URL：https://biz.management.hiluco.net
- Workers URL：https://management-system-ai.hiluco.workers.dev
- 配信ディレクトリ：`dist`（Astro静的ビルド）
- カスタムドメインのDNSと証明書はWorkersが管理します。Pages用CNAMEは不要です。

```bash
npm ci
npx wrangler login
npm run deploy
```

`npm run deploy` は型チェック・本番ビルド後にWorkersへデプロイします。
GitHub更新時の自動デプロイは未設定です。Workers Buildsを利用する場合は本番ブランチ `main`、ビルドコマンド `npm run build`、デプロイコマンド `npx wrangler deploy` に設定してください。

### 公開前レビューの間、閲覧者を限定したい場合

Cloudflare **Zero Trust → Access → Applications** で `biz.management.hiluco.net` を対象にしたアプリケーションを作り、許可するメールアドレス（例：社内・レビュー担当）を指定すると、ログインした人だけが閲覧できます。

### 検索エンジンへの掲載

初期状態では `src/config.ts` の `indexable: false` により、全ページに `noindex` を付け、`robots.txt` でクロールを止めています。`/about/` の公開前チェックリストが終わったら `indexable: true` に変更してください。

## セキュリティ

`public/_headers` で、Content-Security-Policy（スクリプトは自サイトのみ）などのセキュリティヘッダーを設定しています。外部のスクリプト・フォント・計測タグは読み込んでいません。

## 公開前に決める・確認すること

- [ ] 「書誌確認中」の文献（『ブランディングの科学 新市場開拓篇』の刊行年・訳者）を版元で確認
- [ ] `/about/` の責任者欄（事実確認者・健康領域のレビュー担当・利益相反）を記入
- [ ] 総論のnote URLがあれば `src/config.ts` の `soronUrl` に設定
- [ ] `/about/` の公開前チェックリストを完了し、`indexable: true` に変更
