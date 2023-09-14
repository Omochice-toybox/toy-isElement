import { defineConfig } from "vitest/config";

export default defineConfig({
  define: {
    "import.meta.vitest": false,
  },
  test: {
    includeSource: ["test/**/*.{js,ts}"],
    browser: {
      enabled: true,
      provider: "playwright",
      name: "chromium",
      headless: true,
    },
  },
});
