## 🌏 Google Map 실습해보기

#### 1. `Google Api 발급` ➡️ .env.local ➡️ `process.env.NEXT_PUBLIC_KEY`

#### 2. Next, Page Rotuer 방식 사용

#### 3. @react-google-maps/api 라이브러리 사용(지도 로드)

#### 4. use-places-autocomplete 라이브러리 사용 (장소 ID 검색 기능)

#### 5. @reach/combobox 라이브러리 사용 (장소 ID 검색 컴포넌트 기능)

`npm i @reach/combobox --legacy-peer-deps` 으로 깔아줌 > react 18버전에서는 install 불가
단점: 라이브러리 설치 후 타 라이브러리를 설치하거나 제거 불가, 제일 마지막에 추가하는 방도 고려

#### 6. @googlemaps/markerclustererplus 라이브러리 사용 (마커 클러스터링)

## 💫 시작하기

```
1. git clone https://github.com/mobi-community/mobi-google-map.git
2. git checkout Kei
3. npm i
4. npm run dev
```

## 📅 일자별 실습 내용

### 23/09/21

> 1️⃣ @react-google-maps/api 라이브러리 사용하여 구글 지도 로드, center에 마커 표시하기<br>
> 2️⃣ use-places-autocomplete 라이브러리 사용하여 장소(place) ID 검색하여 마커 찍기

### 23/09/23

> 마커 클러스터링 시도하였으나 잘 되지 않아 일단 보류

### 23/09/24

> 1️⃣ snazzy maps 활용하여 구글 맵 스타일 커스텀 테스트 진행
> 2️⃣ 지도 클릭 시 마커 추가 이벤트
> 3️⃣ @googlemaps/markerclustererplus 라이브러리 활용하여 마커 클러스터링 적용

#### 레퍼런스

https://www.youtube.com/watch?v=9e-5QHpadi0
https://www.npmjs.com/package/@googlemaps/markerclustererplus
