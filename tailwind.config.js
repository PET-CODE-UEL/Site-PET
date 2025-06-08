/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Adiciona 'Cascadia Code' como uma opção de fonte 'sans'
        // e define uma lista de fontes de fallback.
        sans: ['"Cascadia Code"', "monospace", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
