/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-head': 'url("~/assets/backgrounds/bg-main.jpg")',
        'main-head-wi': 'url("~/assets/backgrounds/bg-main-without-icons.jpg")',
      }
    },
  },
  plugins: [],
}
