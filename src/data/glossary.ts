/**
 * 用語集。定義は学習用の要約。法令・制度の用語は、実際の判断前に原典と最新版を確認する。
 */

export const GLOSSARY_GROUPS = {
  startup: '起業・実験',
  strategy: '戦略・資源',
  market: '営業・マーケティング',
  org: '組織・知識・パートナー',
  evidence: 'エビデンス・評価',
  health: 'ヘルスケアの制度・規制',
  asset: '収益・資産・出口',
  ai: 'AIとの協働',
} as const;
export type GlossaryGroup = keyof typeof GLOSSARY_GROUPS;

export interface Term {
  id: string;
  term: string;
  en?: string;
  group: GlossaryGroup;
  body: string;
  /** サイト内の関連ページ */
  see?: { href: string; label: string }[];
}

export const TERMS: Term[] = [
  // 起業・実験
  {
    id: 'effectuation',
    term: 'エフェクチュエーション',
    en: 'Effectuation',
    group: 'startup',
    body: 'サラスバシーが熟達した起業家の意思決定から見出した考え方。目的から逆算するのではなく、手持ちの手段から始め、関わる人と一緒に目的そのものをつくっていく。手中の鳥・許容可能な損失・クレイジーキルト・レモネード・飛行機のパイロットの5原則で説明される。',
    see: [{ href: '/lessons/02-means-and-affordable-loss/', label: '講座02' }, { href: '/loops/experiment/', label: 'EXPERIMENT' }],
  },
  {
    id: 'causation',
    term: 'コーゼーション',
    en: 'Causation',
    group: 'startup',
    body: '目的を先に定め、市場を予測し、最適な手段を選ぶ因果的な推論。予測が効く安定した環境では有効で、エフェクチュエーションと二者択一ではない。',
  },
  {
    id: 'bird-in-hand',
    term: '手中の鳥',
    en: 'Bird-in-Hand',
    group: 'startup',
    body: '「自分は何者か（Who I am）」「何を知っているか（What I know）」「誰を知っているか（Whom I know）」という、いま持っている手段から始める原則。',
    see: [{ href: '/worksheets/resources/', label: '手持ち資源マップ' }],
  },
  {
    id: 'affordable-loss',
    term: '許容可能な損失',
    en: 'Affordable Loss',
    group: 'startup',
    body: '期待できる利益ではなく、失ってもよい時間・お金・信用の範囲で挑戦の大きさを決める原則。例：期間3か月、現金10万円まで、週6時間まで。中止条件と同時に決める。',
  },
  {
    id: 'crazy-quilt',
    term: 'クレイジーキルト',
    en: 'Crazy Quilt',
    group: 'startup',
    body: '競合分析より先に、関わってくれる人と約束（コミットメント）を取り付け、一緒に形をつくっていく原則。パッチワークのように、参加者が持ち寄るものでかたちが決まる。',
  },
  {
    id: 'lemonade',
    term: 'レモネード',
    en: 'Lemonade',
    group: 'startup',
    body: '想定外の出来事（すっぱいレモン）を、計画の失敗ではなく新しい手段として活かす原則。',
  },
  {
    id: 'pilot',
    term: '飛行機のパイロット',
    en: 'Pilot-in-the-Plane',
    group: 'startup',
    body: '未来は予測するものではなく、自分たちの行動で形づくるもの、という世界観。コントロールできることに集中する。',
  },
  {
    id: 'mvp',
    term: 'MVP（最小限の製品）',
    en: 'Minimum Viable Product',
    group: 'startup',
    body: '顧客から学ぶために必要な、最小限の提供物。面談、簡易レポート、手作業のサービス、試作品などでもよい。ヘルスケアでは、小さくても安全・表現・同意の確認は省かない。',
  },
  {
    id: 'pmf',
    term: 'PMF（プロダクト・マーケット・フィット）',
    en: 'Product-Market Fit',
    group: 'startup',
    body: '提供物が、特定の市場の顧客に強く求められ、継続的に選ばれている状態。本サイトでは「同じ条件で複数回提供し、継続や紹介が起きているか」を目安にする。',
  },
  {
    id: 'stop-condition',
    term: '中止条件',
    group: 'startup',
    body: '「いつまでに、何が確認できなければやめるか」「やめた場合に何を記録に残すか」を、実験や探索を始めるときに書いておくもの。動いていない構想が判断を重くするのを防ぐ。',
    see: [{ href: '/loops/renew/', label: 'RENEW' }],
  },
  {
    id: 'jobs',
    term: 'ジョブ理論',
    en: 'Jobs to Be Done',
    group: 'startup',
    body: '顧客は製品そのものではなく、ある状況で「片づけたい用事（ジョブ）」のために製品を雇う、という需要の捉え方。属性より状況を聞く。',
  },

  // 戦略・資源
  {
    id: 'rbv',
    term: '資源ベースの考え方（RBV）',
    en: 'Resource-Based View',
    group: 'strategy',
    body: '企業ごとに異なる資源や能力が競争力の源泉になる、とする経営理論。専門職の場合、資格や手技だけでなく、経験・関係・データ・判断基準・思想も資源になる。',
    see: [{ href: '/loops/position/', label: 'POSITION' }],
  },
  {
    id: 'vrio',
    term: 'VRIO',
    group: 'strategy',
    body: '資源を、価値（Value）・希少性（Rarity）・模倣困難性（Imitability）・組織化（Organization）の4つの問いで評価する枠組み。経営者本人にしか使えない能力は、まだ「組織化」されていない。',
  },
  {
    id: 'position-statement',
    term: 'ポジションの一文',
    group: 'strategy',
    body: '「私たちは、［誰・どの組織］が抱える［重要な課題］に対して、［自社固有の知識・経験］を用い、［望ましい変化］を実現する会社である。」という形で自社の位置取りを表す文。実践を通じて何度も更新する。',
  },
  {
    id: 'exploration-exploitation',
    term: '探索と深化',
    en: 'Exploration / Exploitation',
    group: 'strategy',
    body: 'マーチが論じた組織学習の二つの活動。深化は既存の知識・事業を磨くこと、探索は新しい知識・市場・技術を探すこと。深化に偏ると短期的には有利でも環境変化に弱くなる。',
  },
  {
    id: 'ambidexterity',
    term: '両利きの経営',
    en: 'Organizational Ambidexterity',
    group: 'strategy',
    body: '深化と探索を同時に行う組織の能力。小さな会社では部署を分けられないため、時間と予算を先に分けて実現する（例：既存70％・改善20％・探索10％）。',
  },
  {
    id: 'dynamic-capabilities',
    term: 'ダイナミック・ケイパビリティ',
    en: 'Dynamic Capabilities',
    group: 'strategy',
    body: 'ティースが定式化した、環境の変化を感知し（Sensing）、機会を捉え（Seizing）、組織を変革する（Transforming）能力。',
  },
  {
    id: 'future-search',
    term: '未来検索',
    group: 'strategy',
    body: '未来を予言するのではなく、さまざまな情報をつなげて社会が向かう方向の仮説をつくる方法。本サイトではSEARCHループの実践として扱う。',
  },
  {
    id: 'ichigu',
    term: '一隅（いちぐう）',
    group: 'strategy',
    body: '制度の対象外の人、診断名がつかない困難、平均値の裏の少数例、領域と領域の狭間など、まだ光が当たっていない場所。現場にいる専門職にしか記述できない事業機会になりうる。',
  },
  {
    id: 'conversion-ladder',
    term: '変換ラダー',
    group: 'strategy',
    body: 'Labor（労働）→ Expertise（専門性）→ Service（サービス）→ Product（商品）→ System（仕組み）→ Organization（組織能力）→ Asset（事業資産）。上がりきるものではなく、今月の売上がどの段から生まれているかを確かめる物差し。',
    see: [{ href: '/start/', label: 'はじめに' }],
  },
  {
    id: 'three-layers',
    term: '三層構造（思想・実践者・事業）',
    group: 'strategy',
    body: '一人の専門家の活動を、なぜやるのかを蓄積する思想の層、誰とやるのかを蓄積する実践者の層、何をいくらで提供するかを蓄積する事業の層に分ける考え方。層ごとに収益の基準を変えられる。',
  },
  {
    id: 'body-social-knowledge',
    term: '身体知 × 社会知',
    group: 'strategy',
    body: '専門職が持つ身体・行為・生活・回復に関する知（身体知）と、課題が起きている制度・産業・文化についての知（社会知）の掛け算。交わったところに固有の事業機会が生まれる。',
  },

  // 営業・マーケティング
  {
    id: 'icp',
    term: 'ICP（理想的な顧客像）',
    en: 'Ideal Customer Profile',
    group: 'market',
    body: '自社が最も価値を出せ、繰り返し提供できる顧客の条件。領域・事業段階・規模・最終顧客・購買構造などで定める。対象外の条件（Negative ICP）もあわせて決める。',
    see: [{ href: '/worksheets/icp/', label: '顧客と利用場面シート' }],
  },
  {
    id: 'trigger',
    term: 'トリガー（Trigger）',
    group: 'market',
    body: '課題が存在することではなく、「今」対話する理由になる出来事。資金調達、新製品発表、実証の終了、補助金採択、責任者の交代など。',
  },
  {
    id: 'abm',
    term: 'ABM（アカウント・ベースド・マーケティング）',
    en: 'Account Based Marketing',
    group: 'market',
    body: '特定の顧客企業（アカウント）を選び、その企業ごとの仮説に合わせて接点をつくる法人マーケティング。少人数の会社では、対象を絞って「営業メールではなく事業仮説を送る」形で使う。',
  },
  {
    id: 'buyer-committee',
    term: '購買関与者（バイヤー・コミッティー）',
    group: 'market',
    body: '法人の購買に関わる複数の人。利用者、導入担当、決裁者、財務・管理など。それぞれ関心が違うため、伝える価値も変える。',
  },
  {
    id: 'cep',
    term: 'CEP（カテゴリー・エントリー・ポイント）',
    en: 'Category Entry Points',
    group: 'market',
    body: '顧客がある商品カテゴリーを思い浮かべる場面・きっかけ。CEPを多く持つほど思い出されやすい。ヘルスケアなら「夜勤明けに疲れが抜けない」「実証が終わったのに導入が決まらない」など。',
  },
  {
    id: 'mental-availability',
    term: 'メンタル・アベイラビリティ／フィジカル・アベイラビリティ',
    group: 'market',
    body: 'シャープ（『マーケティングの科学』『ブランディングの科学』）の用語。購買の場面で思い出されやすいこと（メンタル）と、手に入りやすいこと（フィジカル）。ブランドの成長は、多くのライトな顧客にとってのこの2つで決まるとされる。',
  },
  {
    id: 'chasm',
    term: 'キャズム',
    group: 'market',
    body: '新しい製品が、初期の熱心な顧客（アーリーアダプター）から主流の顧客（アーリーマジョリティ）へ広がる際に生じる溝。特定の用途に集中して越える。',
  },
  {
    id: 'atomic-network',
    term: 'アトミック・ネットワーク',
    group: 'market',
    body: 'チェンの用語。自走できる最小単位のネットワーク。最初から大きく広げず、最小の塊を一つずつつくって連結していく。',
  },
  {
    id: 'cold-start',
    term: 'コールドスタート問題',
    group: 'market',
    body: '使う人が少ないうちは価値が小さく、価値が小さいから人が集まらない、というネットワーク型の事業・コミュニティの立ち上げの難しさ。',
  },
  {
    id: 'user-payer',
    term: '使う人と払う人',
    group: 'market',
    body: 'ヘルスケア領域では、使う人とお金を払う人が違うことが多い（高齢者が使い自治体や家族が払う、従業員が使い会社が払う、患者が使い保険者が払う）。実験の設計時点で確かめる。',
    see: [{ href: '/themes/healthcare/', label: 'ヘルスケア固有の論点' }],
  },

  // 組織・知識・パートナー
  {
    id: 'seci',
    term: 'SECIモデル',
    group: 'org',
    body: '野中郁次郎らが示した知識創造のモデル。共同化（Socialization）→ 表出化（Externalization）→ 連結化（Combination）→ 内面化（Internalization）の循環で、個人の暗黙知が組織の知識になる。',
    see: [{ href: '/loops/learn/', label: 'LEARN' }],
  },
  {
    id: 'tacit',
    term: '暗黙知・形式知',
    group: 'org',
    body: '言葉にしにくい経験や勘（暗黙知）と、言葉・図・数値で表せる知識（形式知）。専門職の熟練は暗黙知になっていることが多い。',
  },
  {
    id: 'knowledge-assets',
    term: '知識資産5点セット',
    group: 'org',
    body: 'ケース記録、原則集、テンプレート、プロトコル、学習ログ。小さな会社が最初にそろえる知識資産で、そのままAIに前提を渡す材料にもなる。',
  },
  {
    id: 'weak-ties',
    term: '弱い紐帯の強さ',
    en: 'The Strength of Weak Ties',
    group: 'org',
    body: 'グラノヴェッターの研究。新しい情報や機会は、親しい仲間より、ゆるやかにつながる知人から届きやすい。',
  },
  {
    id: 'transaction-cost',
    term: '取引費用',
    en: 'Transaction Cost',
    group: 'org',
    body: '取引相手を探し、条件を交渉し、約束が守られているか確かめるためにかかる費用。コースは、社内に抱えるか外部と組むかがこの費用で決まると論じた。',
  },
  {
    id: 'ostrom',
    term: '共有資源の自主管理（オストロムの設計原則）',
    group: 'org',
    body: '共有資源を長く維持できる集団に共通する条件。明確な境界、地域の条件に合ったルール、当事者による合意、相互の見守り、段階的な制裁、紛争解決の場など。パートナー網の運営原則に使える。',
  },
  {
    id: 'relational-view',
    term: '関係的視点',
    en: 'Relational View',
    group: 'org',
    body: 'ダイアーとシンの議論。企業間の関係そのもの（関係に特有の資産、知識共有、補完的な資源、効果的な統治）が競争優位の源泉になる。',
  },
  {
    id: 'tour-of-duty',
    term: 'ツアー・オブ・デューティー',
    group: 'org',
    body: '『ALLIANCE』で示された、期間と目的を区切った任務として信頼関係を結ぶ考え方。互いの成長目標を明示する。',
  },
  {
    id: 'five-responsibilities',
    term: '5つの責任',
    group: 'org',
    body: '少人数のチームを職種ではなく責任で分ける考え方。顧客の課題を理解する責任、サービス品質を守る責任、知識を蓄積する責任、売上と資金を管理する責任、新しい実験を進める責任。',
  },
  {
    id: 'friction',
    term: '価値のない摩擦／価値を生む摩擦',
    group: 'org',
    body: '日程調整・転記・定型連絡などはAIで減らす「価値のない摩擦」。問いを立てる、違和感を伝える、難しい判断を一緒に行う、責任を引き受けるといった「価値を生む摩擦」は人間が担う。',
  },
  {
    id: 'three-persons',
    term: '一人称・二人称・三人称の情報',
    group: 'org',
    body: '本人の主観（一人称）、関わる人が身体で感じ取ったもの（二人称）、測定・記録などの外からの観察（三人称）。三つがずれているときに重要なことが起きている。',
  },

  // エビデンス・評価
  {
    id: 'complex-intervention',
    term: '複雑介入',
    en: 'Complex Intervention',
    group: 'evidence',
    body: '多くの要素が文脈の中で相互に作用して効果を生む介入。ヘルスケアのサービスの多くが該当する。MRC／NIHRのフレームワークは、開発・実現可能性・評価・実装の各段階で文脈を重視する。',
    see: [{ href: '/lessons/07-measure-and-revise/', label: '講座07' }],
  },
  {
    id: 're-aim',
    term: 'RE-AIM',
    group: 'evidence',
    body: '到達（Reach）、効果（Effectiveness）、採用（Adoption）、実施の忠実さ（Implementation）、維持（Maintenance）の5軸で、介入が現場に根づくかを評価する枠組み。',
  },
  {
    id: 'logic-model',
    term: 'ロジックモデル',
    group: 'evidence',
    body: '投入資源 → 活動 → 直接の成果 → 中間成果 → 最終的な変化を1枚に描き、何を測るかを決める図。',
    see: [{ href: '/worksheets/logic-model/', label: 'サービス理論図' }],
  },
  {
    id: 'cfir',
    term: 'CFIR（実装研究の統合フレームワーク）',
    group: 'evidence',
    body: '実装の成否を左右する要因を、介入の特性・外部環境・組織内環境・関わる個人・実装プロセスの領域で整理した枠組み。',
  },
  {
    id: 'evidence-labels',
    term: '根拠ラベル',
    group: 'evidence',
    body: '本サイトで使う5つの区分。公的指針／研究知見／実務書の枠組み／HILUCOの実務仮説／HILUCOの検証済み手順。研究・指針・書籍の提案・社内の仮説を混同しないために使う。',
    see: [{ href: '/about/', label: '根拠と運営方針' }],
  },
  {
    id: 'between-within',
    term: '個人間差と個人内変動',
    group: 'evidence',
    body: '「スコアが高い人ほど調子がよい」（人と人の違い）と、「同じ人のスコアが上がると調子がよくなる」（一人の中の変化）は別の主張。前者の結果を後者のように語らない。',
  },
  {
    id: 'correlation-causation',
    term: '相関と因果',
    group: 'evidence',
    body: '二つのものが一緒に変化する（相関）ことは、一方が他方を引き起こす（因果）ことを意味しない。比較群がない介入の前後比較からは、変化が介入によるものとは言い切れない。',
  },
  {
    id: 'nice-esf',
    term: 'NICE ESF（デジタルヘルス技術のエビデンス標準）',
    group: 'evidence',
    body: '英国NICEの基準。デジタルヘルス技術の機能とリスクの段階に応じて、求める根拠の水準を変える。',
  },

  // ヘルスケアの制度・規制
  {
    id: 'sensitive-personal-info',
    term: '要配慮個人情報',
    group: 'health',
    body: '個人情報保護法で定める、本人への不当な差別や偏見などの不利益が生じないよう、取扱いに特に配慮を要する個人情報。病歴、健康診断の結果、診療情報などを含む。取得には原則として本人の同意が必要。医療・介護分野にはガイダンスがある。',
  },
  {
    id: 'pmd-act',
    term: '薬機法と医療機器該当性',
    group: 'health',
    body: '医薬品・医療機器等の品質・有効性・安全性を確保するための法律。疾病の診断・治療・予防を目的とする機器やプログラムは医療機器に該当しうる。アプリやツールを作る場合、使用目的と機能の表現によって該当性が変わるため、ガイドラインを確認し必要に応じて専門家に相談する。',
  },
  {
    id: 'labeling',
    term: '景品表示法・健康増進法（誇大な表示）',
    group: 'health',
    body: '商品・サービスの内容を実際より著しく優良と示す表示（優良誤認）や、健康の保持増進の効果について著しく事実に反する・誤認させる表示は規制されている。根拠のない効果の断定を避け、対象・条件・指標を明示する。',
  },
  {
    id: 'medical-ad',
    term: '医療広告ガイドライン',
    group: 'health',
    body: '医療法にもとづく、医療機関等の広告に関する指針。ウェブサイトも対象になる。医療機関と組む、医療機関の発信を支援する場合は、公開直前に最新版を確認する。',
  },
  {
    id: 'phr',
    term: 'PHR（パーソナル・ヘルス・レコード）',
    group: 'health',
    body: '個人が自らの健康・医療・介護の情報を記録・管理し、活用する仕組み。事業者には、同意の取り方や情報の扱いに関する指針の確認が求められる。',
  },
  {
    id: 'kenko-keiei',
    term: '健康経営',
    group: 'health',
    body: '従業員の健康保持・増進の取り組みを、経営的な視点で考え戦略的に実践すること（NPO法人健康経営研究会の登録商標）。法人向けサービスでは、身体の課題を欠勤・生産性・安全・定着など企業の言葉へ翻訳する場面が多い。',
  },

  // 収益・資産・出口
  {
    id: 'intangible-4s',
    term: '無形資産の4S',
    group: 'asset',
    body: 'ハスケルとウェストレイクが示した無形資産の性質。拡張性（Scalability）、埋没性（Sunkenness）、波及効果（Spillovers）、相乗効果（Synergies）。',
  },
  {
    id: 'three-returns',
    term: '3つの収益（Cash／Learning／Relationship）',
    group: 'asset',
    body: '案件を、現金収益・学習収益・関係収益の3つで評価する考え方。何を得る案件なのかを明確にし、現金だけの案件が続いていないかに気づく。',
    see: [{ href: '/worksheets/three-returns/', label: '3つの収益評価' }],
  },
  {
    id: 'sync-revenue',
    term: '時間の同期が必要な収益／必要ない収益',
    group: 'asset',
    body: '相手と同じ時間・場所にいることが前提の収益（臨床、セミナー、会議）と、そうでない収益（教材、アプリ、ライセンス、紹介）。同期型で現場と知見を保ちながら、非同期型で時間の制約を外していく。',
  },
  {
    id: 'five-engines',
    term: '5つの事業エンジン',
    group: 'asset',
    body: 'High-ticket ToC、ToB、Media / Education、Code / Product、System / IP。後ろのエンジンほど前のエンジンの蓄積が必要になる。',
    see: [{ href: '/themes/engines/', label: '事業エンジンと収益' }],
  },
  {
    id: 'public-good',
    term: '公共財として維持する活動',
    group: 'asset',
    body: '大きな利益は求めず、赤字も垂れ流さず、黒字トントンで維持すると決めた活動。関係と社会的意義で評価し、「儲からないから縮小すべきか」という検討を毎回しなくて済むようにする。',
  },
  {
    id: 'acquisition-entrepreneurship',
    term: '買収起業',
    group: 'asset',
    body: 'ゼロから事業をつくる代わりに、既存の小さな事業を買い取って経営する起業の方法。候補選定・評価・交渉・資金調達・買収後の移行が論点になる。',
  },
  {
    id: 'due-diligence',
    term: 'デューデリジェンス',
    group: 'asset',
    body: '買収や出資の前に、対象事業の財務・法務・事業・人事などを調べ、リスクと価値を確かめる手続き。',
  },

  // AI
  {
    id: 'ai-skill',
    term: 'AIスキル（カスタム指示）',
    group: 'ai',
    body: '繰り返す業務の手順や判断基準を、AIツールにあらかじめ登録しておくもの。他者が実行できる粒度で書く必要があるため、書く作業がそのまま形式知化（SECIの表出化）になる。',
    see: [{ href: '/themes/ai/', label: 'AIとの協働' }],
  },
  {
    id: 'counter-prompt',
    term: '反証を求める',
    group: 'ai',
    body: 'AIは同意しやすいため、「この結論が間違っているとしたらなぜか」「反対の立場の専門家ならどこを突くか」を必ず問う。思い込みを補強する道具にしないための習慣。',
  },
  {
    id: 'five-human-roles',
    term: '人間に残す5つの役割',
    group: 'ai',
    body: '顧客理解、専門判断、意味づけ、関係構築、責任。AIに何を任せるかと同時に、何を会社に残すかを決める。',
  },
  {
    id: 'four-work-types',
    term: '業務の4分類',
    group: 'ai',
    body: '人間が行う／AIが支援する／自動化する／やめる。価値の低い仕事を効率よく続けるより、まずやめるほうがよい場合がある。',
    see: [{ href: '/worksheets/work-split/', label: '業務の4分類' }],
  },
];
