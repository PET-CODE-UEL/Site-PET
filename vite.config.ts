import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindscss from "@tailwindcss/vite";
import path from "path"; // Importe o módulo 'path' do Node.js

export default defineConfig({
  plugins: [react(), tailwindscss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
