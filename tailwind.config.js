/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: '#FF6B6B',
      secondary: '#4ECDC4',
      accent: '#FFDD59',
      white: '#ffffff',
      black: '#000000',
      gray: {
        light: '#F7F7F7',
        DEFAULT: '#D3D3D3',
        dark: '#2E2E2E'
      }
    },
  },
  plugins: [],
};

