이미지 폴더 가이드
=========================================

public/images/ 아래에 이미지를 넣은 뒤, 각 컴포넌트의 url('...') 부분을
'/images/<폴더>/<파일명>' 으로 바꿔주세요.

예) Hero.tsx
   backgroundImage: "url('/images/hero/main.jpg')"

권장 사이즈는 참고치이며, 더 큰 원본을 넣어도 OK 입니다.
JPG/PNG/WEBP 모두 가능. 가능하면 WEBP 권장 (용량↓ 화질↑).

-----------------------------------------
hero/        — 메인 비주얼 (Hero 섹션)
   main.jpg                  2400 x 1600  (조감도/스카이라인 권장)

overview/    — 단지개요 섹션
   landmark.jpg              2000 x 1300  (단지 외관/조감도)

location/    — 입지환경 섹션
   bg.jpg                    2400 x 1400  (도시 야경 등 배경용)
   map.jpg                   2000 x 1250  (지도 또는 위치 다이어그램)

premium/     — 프리미엄 커뮤니티 섹션
   pool.jpg                  1600 x 2000  (수영장)
   fitness.jpg               1600 x 2000  (피트니스/골프)
   kids.jpg                  1600 x 2000  (키즈/패밀리 라운지)
   education.jpg             1800 x 1100  (학세권/도서관 배너)

gallery/     — 갤러리 섹션 (6장)
   01-exterior.jpg           1600 x 2000  (대표/큰 이미지)
   02-living.jpg             1600 x 1000
   03-kitchen.jpg            1200 x 1200
   04-bedroom.jpg            1200 x 1200
   05-community.jpg          1200 x 1200
   06-landscape.jpg          1600 x 1000

contact/     — 분양 문의 섹션
   bg.jpg                    2400 x 1500  (배경용)

common/      — 로고, OG 이미지 등 공통
   logo.svg
   og.jpg                    1200 x 630   (SNS 공유용)
-----------------------------------------

[교체 위치 빠른 찾기]
 components/Hero.tsx       → Hero 배경
 components/Overview.tsx   → 큰 비주얼 카드
 components/Location.tsx   → 배경 + 지도 카드
 components/Premium.tsx    → 3 features + education band
 components/Gallery.tsx    → IMAGES 배열의 src 6개
 components/Contact.tsx    → Contact 섹션 배경
