/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React 컴포넌트 파일 스캔
  ],
  theme: {
    extend: {}, // 사용자 정의 테마를 추가하려면 여기에 작성
  },
  plugins: [], // 추가 플러그인이 필요하면 여기에 작성
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
],
  theme: {
    extend: {},
  },
  plugins: [],
}