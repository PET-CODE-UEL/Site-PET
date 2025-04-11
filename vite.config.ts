import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindscss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  root: "src/app",
  plugins: [react(), tailwindscss()],
});
