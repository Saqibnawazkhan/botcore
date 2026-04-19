/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        botcore: {
          green: '#00FF00',
          greenDark: '#006400',
          black: '#0D0D0D',
          ink: '#151515',
          grey: '#4D4D4D',
          greyLight: '#E8E8E8',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
        display: ['Syne', '"Space Grotesk"', 'sans-serif'],
      },
      dropShadow: {
        glow: '0 0 14px rgba(0,255,0,0.45)',
      },
    },
  },
  plugins: [],
};
