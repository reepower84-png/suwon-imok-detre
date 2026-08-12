export const SECTIONS = [
  { id: "home", label: "HOME" },
  { id: "overview", label: "단지개요" },
  { id: "benefit", label: "분양혜택" },
  { id: "location", label: "입지환경" },
  { id: "premium", label: "프리미엄" },
  { id: "gallery", label: "갤러리" },
  { id: "contact", label: "문의" }
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export const PHONE_NUMBER = "1666-6365";
export const PHONE_TEL = "tel:1666-6365";
export const SITE_NAME = "수원이목지구 대방 디에트르";
export const MODEL_HOUSE_ADDRESS = "경기 수원시 권선구 서둔동 412";
