import type { LoopId, PhaseId } from './taxonomy';

/**
 * 「悩みから探す」入口。総論の「どのループから入ればよいか」と
 * 第14章「よくあるつまずきと処方」を、症状 → 原因 → 処方 → 読む場所の形に整理したもの。
 */
export interface Symptom {
  id: string;
  title: string;
  /** よくある状態 */
  signs: string;
  cause: string;
  prescription: string;
  loops: LoopId[];
  phase: PhaseId;
  lessons: string[];
  worksheets: string[];
  links?: { href: string; label: string }[];
}

export const SYMPTOMS: Symptom[] = [
  {
    id: 'unstable-revenue',
    title: '売上が不安定で、来月が読めない',
    signs: '単発の仕事が中心で、紹介が途切れると収入が止まる。何を伸ばせばよいか分からない。',
    cause: '継続的に対価を払う顧客と、2本目の収入源がまだない。顧客の本当の困りごとを確かめる前に提供物を決めている。',
    prescription: 'まず目の前の顧客と価値をつくり、現金を確保する。既存の関係から最初の有償案件をつくり、時間を使う仕事と使わない仕事の種を両方まく。',
    loops: ['experiment', 'serve'],
    phase: '0-1',
    lessons: ['03', '04'],
    worksheets: ['interview', 'experiment'],
  },
  {
    id: 'too-busy',
    title: '売上はあるが、忙しすぎて考える時間がない',
    signs: '自分が1か月休むと、ほとんどが止まる。人に任せると品質が落ちる気がして手放せない。',
    cause: '売上のほとんどが経営者の稼働（Labor）から生まれている。判断基準が言葉になっていない。',
    prescription: '自分の仕事を言語化し、渡せる形にする。繰り返す業務を1つ選び、手順書（AIスキル）を書き、他の人に試してもらう。',
    loops: ['learn', 'systemize'],
    phase: '1-10',
    lessons: ['08'],
    worksheets: ['protocol', 'work-split'],
    links: [{ href: '/plan-90/', label: '90日プラン（31〜60日目）' }],
  },
  {
    id: 'not-growing',
    title: '売上も仕組みもあるのに、伸びない',
    signs: '同じような案件を繰り返している。提案や発信が一般論になってきた。',
    cause: '社会の変化と自社資源の掛け算を見直していない。過去案件から「伸びる構造」を取り出していない。',
    prescription: '社会の変化（SEARCH）と自社の固有資源（POSITION）を見直す。伸びた案件と止まった案件を並べ、伸びる構造を一文にする。',
    loops: ['search', 'position'],
    phase: '1-10',
    lessons: ['05', '06'],
    worksheets: ['portfolio', 'icp'],
  },
  {
    id: 'future-anxiety',
    title: '今は良いが、将来が不安',
    signs: '既存の顧客に頼りきっている。新しいことを考える時間が毎月なくなっていく。',
    cause: '探索を「余裕があればやること」に置いている。信頼が特定の顧客との関係に閉じている。',
    prescription: '信頼を積み（TRUST）、次の事業を探索する（RENEW）。探索の時間と予算を先にカレンダーに入れ、同時に動いていない構想を1つやめる。',
    loops: ['trust', 'renew'],
    phase: '10-100',
    lessons: ['11'],
    worksheets: ['scenario'],
  },
  {
    id: 'solo-corp',
    title: '法人化したが、実質は一人会社のまま',
    signs: '営業・提供・請求・発信のすべてを自分が行っている。',
    cause: '法人化を「形式の変更」として行い、価値提供の構造を変えていない。',
    prescription: '変換ラダー（労働→専門性→サービス→商品→仕組み→組織能力→事業資産）で現在地を確かめ、一つの業務を他人が読んで実行できる形にするところから始める。',
    loops: ['learn', 'systemize'],
    phase: '1-10',
    lessons: ['08', '10'],
    worksheets: ['protocol', 'decision-rights'],
    links: [{ href: '/start/#ladder', label: '変換ラダー' }],
  },
  {
    id: 'ai-overproduce',
    title: 'AIで作りすぎて、届けていない',
    signs: '資料・記事・試作品は増えているが、顧客の反応は増えていない。',
    cause: 'AIで「作るコスト」は下がったが、「届けるコスト」「使ってもらうコスト」は下がっていない。',
    prescription: '実験カードに「使う人」と「払う人」を明記する。作ったものを3件の既存関係に持っていき、反応を記録するところまでを1つの実験とする。',
    loops: ['experiment'],
    phase: '0-1',
    lessons: ['04'],
    worksheets: ['experiment'],
    links: [{ href: '/themes/ai/', label: 'AIとの協働' }],
  },
  {
    id: 'content-only',
    title: '発信だけが先行している',
    signs: 'SNSやブログの投稿は増えているが、実践が伴っていない。一般論しか書けなくなっている。',
    cause: '現場を離れている、または発信を「量」で評価している。',
    prescription: '実践を信頼へ変えるフライホイール（実践→成果→ケース→発信→信頼→新しい顧客→さらに深い実践）を確認する。小さくても現場を持ち続け、発信の材料を一次体験から取る。',
    loops: ['trust'],
    phase: '1-10',
    lessons: ['06'],
    worksheets: [],
    links: [{ href: '/loops/trust/', label: 'TRUST' }],
  },
  {
    id: 'all-engines',
    title: '全部を同時に立ち上げようとして、どれも中途半端',
    signs: '個別セッション、法人研修、教材、アプリ、コミュニティを同時に走らせている。',
    cause: '「後ろのエンジンほど前の蓄積が必要」という順序を飛ばしている。',
    prescription: '一つのエンジンに集中し、そこで得られる蓄積（ケース・方法論・データ）を明示する。他は一時停止するか、中止条件を書いて置いておく。',
    loops: ['systemize', 'renew'],
    phase: '1-10',
    lessons: ['05'],
    worksheets: ['portfolio'],
    links: [{ href: '/themes/engines/', label: '事業エンジンと収益' }],
  },
  {
    id: 'cant-let-go',
    title: '属人性を手放せない',
    signs: '「自分がやったほうが早い」「他の人では品質が落ちる」と考えて仕組み化が進まない。',
    cause: '品質基準を100％の再現に置いている。',
    prescription: '「必ず守る原則」「判断の観点」「代表的なパターン」「例外時の相談方法」の4つに分け、まず原則だけを共有する。他者が提供した結果と自分の結果の差を記録し、手順を改訂する。',
    loops: ['learn'],
    phase: '1-10',
    lessons: ['08'],
    worksheets: ['protocol', 'revision-card'],
  },
  {
    id: 'no-exploration',
    title: '探索がいつまでも後回しになる',
    signs: '新しいことを考える時間が、毎月なくなっていく。「いつか再開する」構想が複数ある。',
    cause: '探索を「余裕があればやること」に置いている。動いていない構想が判断を重くしている。',
    prescription: '時間と予算を先に分けてカレンダーに入れる。比率は10％からでよい。動いていない構想を一つ正式にやめる。',
    loops: ['renew'],
    phase: '10-100',
    lessons: ['11'],
    worksheets: ['scenario'],
  },
  {
    id: 'price-stuck',
    title: '価格を上げられない',
    signs: '良い仕事をしている実感はあるが、月5万円前後から動かない。',
    cause: '提供しているものが、顧客にとって「未来の可能性」だけ、あるいは「今の売上」だけに効いている。',
    prescription: '「今月の売上」と「3年後の可能性」の両方に接続できているかを見直す。片方しかない場合、もう片方につながる要素を一つ追加できないか検討する。効率化分を値引きに使わない。',
    loops: ['position', 'serve'],
    phase: '1-10',
    lessons: ['05', '06'],
    worksheets: ['portfolio', 'three-returns'],
  },
  {
    id: 'evidence-claims',
    title: '効果をどこまで言ってよいか分からない',
    signs: '営業資料で「効果がある」と書きたいが、根拠に自信がない。逆に慎重になりすぎて何も言えない。',
    cause: '「言えること」と「言えないこと」の線が引けていない。根拠の種類（研究・指針・実務書・自社の仮説）を混同している。',
    prescription: '主張ごとに根拠ラベルをつけ、対象・条件・指標・時間幅を明示する。ロジックモデルで「どこを測るか」を決め、限界を報告書に書く。',
    loops: ['serve', 'trust'],
    phase: '1-10',
    lessons: ['07'],
    worksheets: ['logic-model'],
    links: [{ href: '/themes/healthcare/', label: 'ヘルスケア固有の論点' }],
  },
  {
    id: 'need-team',
    title: '人手が足りないが、人を雇うのは怖い',
    signs: '案件は増えているが、固定費を増やす決断ができない。外部の人に頼むと説明に時間がかかる。',
    cause: '雇用か一人かの二択で考えている。パートナーと組むときのルール（責任・還元・知財）が決まっていない。',
    prescription: '考え方を共有した人と、作業ではなく成果と責任で組む。還元の設計を先に決め、パートナー・プロジェクト憲章を交わす。',
    loops: ['systemize', 'trust'],
    phase: '10-100',
    lessons: ['09'],
    worksheets: ['partner-charter'],
    links: [{ href: '/themes/partnership/', label: '雇わずに組む' }],
  },
  {
    id: 'no-assets',
    title: '何年もやっているのに、会社に何も残っていない',
    signs: '報告書を出すと案件が終わり、次の案件はまたゼロから。',
    cause: '契約前に「終了後に残すもの」を決めていない。案件を現金収益だけで評価している。',
    prescription: '次の案件で、契約前に「顧客に返すもの／自社に残すもの」を合意する。案件を3つの収益で評価し、無形資産台帳を年に一度更新する。',
    loops: ['serve', 'systemize'],
    phase: '10-100',
    lessons: ['12'],
    worksheets: ['pre-contract', 'asset-ledger', 'three-returns'],
  },
];
