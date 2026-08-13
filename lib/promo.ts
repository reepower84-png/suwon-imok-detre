/* /promo — 직관형 프로모션 랜딩 전용 데이터.
   기존 사이트(/) 는 그대로 두고 이 파일만 별도로 관리한다. */

export const PROMO_NAV = [
  { id: "promo-point", label: "특장점" },
  { id: "promo-why", label: "왜 지금" },
  { id: "promo-overview", label: "사업개요" },
  { id: "promo-price", label: "분양가" },
  { id: "promo-plan", label: "평면안내" },
  { id: "promo-location", label: "입지환경" },
  { id: "promo-premium", label: "프리미엄" },
  { id: "promo-reserve", label: "방문예약" }
] as const;

export const HEADLINE_TOP = "장안구 84㎡ 실거래가 15억 시대!";
export const HEADLINE_BOTTOM = "계약금 5%로 신축아파트를 선점할 기회!";

/* 사용자 지정 4가지 특장점 — 문구 그대로 노출 */
export const KEY_POINTS = [
  {
    n: "1",
    title: "계약금 5%",
    sub: "입주 시까지",
    note: null as string | null
  },
  {
    n: "2",
    title: "중도금 60%",
    sub: "다주택자 대출 가능",
    note: "※ 개인별 대출심사 등 조건 확인 필요"
  },
  {
    n: "3",
    title: "입주 전 전매 가능",
    sub: "실거주 의무 없음",
    note: null
  },
  {
    n: "4",
    title: "10·15 규제 미적용",
    sub: "수원 이목지구",
    note: null
  }
];

export const POINT_CLOSING =
  "기존 수원 생활권의 편리함 + 새롭게 조성되는 택지의 쾌적함까지!";

export const NAVER_FORM_URL =
  "https://form.naver.com/response/UuI_Z5VPT2BJ34F2xGWA8A";
