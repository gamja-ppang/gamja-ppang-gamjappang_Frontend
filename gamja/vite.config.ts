import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5181, // 포트 번호 5181
    strictPort: true, // 5181이 이미 사용 중이면 에러내기
  },
});
