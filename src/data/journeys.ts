/** HILUCO Methods と共通の入口。「直す」は全フェーズを横断する。 */
export const JOURNEYS = [
  { title: '始める', analogy: '誕生・成長', label: '0→1｜探索', href: '/phases/0-1/', description: '手持ちの資源で小さく試し、最初の継続顧客をつくる。' },
  { title: '伸ばす', analogy: 'トレーニング', label: '1→10｜再現', href: '/phases/1-10/', description: '伸びる理由を説明でき、自分以外でも再現できる形にする。' },
  { title: '直す', analogy: 'リハビリテーション', label: '全フェーズ｜悩みから', href: '/symptoms/', description: '成長の途中で出た不具合を、見立てと実践で立て直す。' },
  { title: '続ける', analogy: '予防・ケア・継承', label: '10→100｜組織化', href: '/phases/10-100/', description: '硬直化を防ぎ、次の事業と担い手を育てる。' },
] as const;
