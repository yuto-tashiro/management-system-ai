/**
 * 90日でマイクロ法人のOSをつくる（総論 第13章の手順を週単位に整理）。
 * 週あたり4〜6時間を想定。
 */
export interface PlanBlock {
  id: string;
  range: string;
  title: string;
  aim: string;
  weeks: { week: string; tasks: string[]; links?: { href: string; label: string }[] }[];
  aiPrompt?: string;
  done: string;
}

export const PLAN_90: PlanBlock[] = [
  {
    id: 'understand',
    range: '1〜30日目',
    title: '自社を理解する',
    aim: '新しい事業を始める前に、現在の会社が何によって価値を生み、どこに依存し、何が蓄積されているかを見えるようにする。',
    weeks: [
      {
        week: '第1週',
        tasks: ['仕事の棚卸し：商品・顧客・売上・利益・稼働時間を一覧にする', '経営者依存の確認：自分が1か月休むと何が止まるかを書き出す'],
        links: [{ href: '/start/#ladder', label: '変換ラダーで現在地を見る' }],
      },
      {
        week: '第2週',
        tasks: ['自社資源の棚卸し：経験・ケース・データ・関係・方法論・ブランド', '過去案件の構造分析：伸びた案件と止まった案件を並べ、共通する構造を言葉にする'],
        links: [
          { href: '/worksheets/resources/', label: '手持ち資源マップ' },
          { href: '/worksheets/portfolio/', label: '案件ポートフォリオ表' },
        ],
      },
      {
        week: '第3週',
        tasks: ['社会変化の収集：自社に関係する変化を10個集め、3つの大きな流れにまとめる（毎日15分でよい）'],
        links: [{ href: '/loops/search/', label: 'SEARCHループ' }],
      },
      {
        week: '第4週',
        tasks: ['ポジションの一文を書き、信頼できる人に見せて反応をもらう'],
        links: [{ href: '/lessons/06-customer-and-context/', label: '講座06' }],
      },
    ],
    aiPrompt:
      '過去3年の案件リストを渡します。継続したものと単発で終わったものに分け、両者の構造的な違いについて仮説を5つ挙げてください。そのうえで、その仮説が間違っている可能性についても指摘してください。',
    done: '自社のポジションを示す一文と、「伸びる構造／止まる構造」の仮説がある。',
  },
  {
    id: 'systemize',
    range: '31〜60日目',
    title: '一つの専門性を仕組みに変える',
    aim: 'いまうまくいっている仕事を一つ選び、他の人が「何を考えればよいか」を理解できる状態にする。経営者本人と同じ水準をすぐ再現することは目指さない。',
    weeks: [
      { week: '第5週', tasks: ['良いケースを3件選び、どんな顧客に何を行い、なぜうまくいったかを整理する'] },
      {
        week: '第6週',
        tasks: ['判断基準を言葉にする：熟練者が見ているポイントを対話から抽出する（できれば録音する）'],
        links: [{ href: '/loops/learn/', label: '表出化を助ける4つの問い' }],
      },
      {
        week: '第7週',
        tasks: ['最小プロトコルを1枚つくる：対象選定・評価・提供・記録・フォロー', 'AIと人間の役割を分け、繰り返す作業をAIスキルとして文書化する'],
        links: [
          { href: '/worksheets/protocol/', label: '最小プロトコル' },
          { href: '/worksheets/work-split/', label: '業務の4分類' },
        ],
      },
      { week: '第8週', tasks: ['他の人に試してもらい、分かりにくい部分を修正する'], links: [{ href: '/worksheets/revision-card/', label: 'サービス改訂カード' }] },
    ],
    done: '標準化されたサービスが1つ（プロトコル1枚）と、最低限の知識資産（ケース記録・原則集・テンプレート）がある。',
  },
  {
    id: 'experiment',
    range: '61〜90日目',
    title: '新しい事業実験を行う',
    aim: '社会の変化と自社資源の交点から、一つの小さな実験を行い、継続・修正・中止を決める。',
    weeks: [
      { week: '第9週', tasks: ['顧客の課題と自社の強みが最も重なる仮説を1つ選ぶ', '許容損失と中止条件を数字で決める'], links: [{ href: '/worksheets/experiment/', label: '実験カード' }] },
      { week: '第10週', tasks: ['最小の提供物をつくる（面談、簡易診断、研修、レポート、試作品などでよい）'] },
      { week: '第11週', tasks: ['既存の関係3件に提案し、反応を言葉どおりに記録する'], links: [{ href: '/worksheets/interview/', label: '顧客面談メモ' }] },
      { week: '第12週', tasks: ['継続・修正・中止を決め、次の90日の計画を書く'], links: [{ href: '/diagnosis/', label: 'もう一度診断する' }] },
    ],
    done: '一つの新規事業実験と、その学習記録がある。次の90日で改善する課題が決まっている。',
  },
];
