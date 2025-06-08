/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cascadia: ['"Cascadia Code"', "monospace", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

