/* 타입별 평면·면적·평당가.
   출처: 분양 홍보자료(평면 안내 / 중개업소 배포자료).
   평당가는 실사용면적 기준·발코니 확장비 포함·평균가 기준. */

export type Unit = {
  id: string;
  name: string; // 표기명
  m2: string; // 전용면적(㎡)
  households: number; // 세대수
  exclusive: number; // 전용면적(평)
  service: number; // 서비스면적(평)
  usable: number; // 실사용면적(평)
  pyeongPrice: number; // 실사용면적 평당가(원)
  freeOption: string; // 한시적 무상 제공 옵션
  built: boolean; // 건립세대 여부
  soldOut?: boolean; // 분양마감 여부
  plan: string; // 평면 이미지
  features: string[]; // 상품 특장점 요약
};

export const UNITS: Unit[] = [
  {
    id: "84a",
    name: "84A",
    m2: "84.8536",
    households: 284,
    exclusive: 25.66,
    service: 14.15,
    usable: 39.82,
    pyeongPrice: 28555000,
    freeOption: "약 2,129만원",
    built: true,
    plan: "/images/promo/84a.jpg",
    features: ["4Bay 맞통풍", "3면 발코니 확장", "5.2m 광폭거실", "펜트리 + 대형 드레스룸"]
  },
  {
    id: "84b",
    name: "84B",
    m2: "84.3693",
    households: 351,
    exclusive: 25.52,
    service: 12.32,
    usable: 37.84,
    pyeongPrice: 28388000,
    freeOption: "약 1,723만원",
    built: true,
    plan: "/images/promo/84b.jpg",
    features: ["4Bay 맞통풍", "판상형", "5.2m 광폭거실", "펜트리 + 대형 드레스룸"]
  },
  {
    id: "84c",
    name: "84C",
    m2: "84.9796",
    households: 646,
    exclusive: 25.7,
    service: 10.6,
    usable: 36.31,
    pyeongPrice: 28330000,
    freeOption: "약 1,926만원",
    built: true,
    plan: "/images/promo/84c.jpg",
    features: ["3Bay 타워형", "4.7m 광폭거실", "대형 펜트리", "우물천장 약 2.6m"]
  },
  {
    id: "115a",
    name: "115A",
    m2: "115.8929",
    households: 99,
    exclusive: 35.05,
    service: 16.29,
    usable: 51.34,
    pyeongPrice: 26800000,
    freeOption: "약 3,307만원",
    built: true,
    plan: "/images/promo/115.jpg",
    features: ["4Bay 맞통풍", "3면 발코니 확장", "5.5m 광폭거실", "2 알파룸 + 대형 드레스룸"]
  },
  {
    id: "116b",
    name: "116B",
    m2: "116.9019",
    households: 100,
    exclusive: 35.36,
    service: 11.29,
    usable: 46.65,
    pyeongPrice: 26736000,
    freeOption: "약 3,356만원",
    built: true,
    soldOut: true,
    plan: "/images/promo/116b.jpg",
    features: ["3Bay 타워형", "5m 광폭거실", "대형 드레스룸", "펜트리 구성"]
  },
  {
    id: "139a",
    name: "139A",
    m2: "139.7348",
    households: 98,
    exclusive: 42.26,
    service: 17.3,
    usable: 59.57,
    pyeongPrice: 27504000,
    freeOption: "약 4,028만원",
    built: true,
    plan: "/images/promo/139.jpg",
    features: ["4Bay 맞통풍", "판상형", "5.8m 광폭거실", "2 알파룸 + 대형 드레스룸"]
  },
  {
    id: "141b",
    name: "141B",
    m2: "141.3203",
    households: 98,
    exclusive: 42.74,
    service: 10.68,
    usable: 53.43,
    pyeongPrice: 27247000,
    freeOption: "약 3,962만원",
    built: true,
    plan: "/images/promo/141b.jpg",
    features: ["3Bay 타워형", "5.2m 광폭거실", "대형 드레스룸", "펜트리 구성"]
  }
];

/* 만원 단위로 나누면 끝자리가 소수로 남아 표기가 지저분해진다.
   원자료(중개업소 배포자료) 표기와 동일하게 원 단위로 노출한다. */
export function formatPyeongPrice(won: number) {
  return `${won.toLocaleString("ko-KR")}원`;
}

/* 원자료가 소수점 두 자리로 표기되므로 끝자리 0을 유지한다 (17.3 → 17.30). */
export function py(n: number) {
  return n.toFixed(2);
}
