import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vi } from "vitest";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // указываем окружение для работы с DOM
    globals: true, // включаем глобальные переменные, такие как describe и it
    setupFiles: ["./setupTests.ts"], // подключаем файл с настройками для тестов
  },
});
