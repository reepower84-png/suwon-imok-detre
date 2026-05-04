import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "수원이목지구 대방 디에트르 | 공식 분양 안내",
  description:
    "북수원의 새로운 기준, 수원이목지구 대방 디에트르. 광역 교통망과 우수한 학군, 프리미엄 커뮤니티를 갖춘 미니신도시급 단지의 분양 정보를 확인하세요.",
  keywords: [
    "수원이목지구",
    "대방 디에트르",
    "북수원 디에트르",
    "수원 분양",
    "이목동 아파트",
    "디에트르 더 리체"
  ],
  openGraph: {
    title: "수원이목지구 대방 디에트르",
    description:
      "북수원 핵심 입지, 미니신도시급 4,500세대 규모. 분양 문의 1666-6365",
    type: "website",
    locale: "ko_KR"
  }
};

export const viewport: Viewport = {
  themeColor: "#0c0c0d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
