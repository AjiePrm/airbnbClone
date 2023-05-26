/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      primaryRed: "#FF5A5F",
      primaryPurple: "#914669",
      primaryGreeb: "#008489",
      secondaryDark: "#484848",
      secondaryGray: "#767676",
      secondaryWhite: "#FFFFFF",
    },
    extend: {
      backgroundImage:{
        'image-hero': "url('~/assets/image/bghero.svg')"
      },
      fontFamily: {
        fontRoboto: ["Roboto", "sans-serif"],
       },
    },
  },
  plugins: [],
};
