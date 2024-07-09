/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    },

    extend: {
      scale: {
        '102': '1.02'
      },
      animation: {
        'spin-once': 'spin 0.6s linear 0.5',
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [{
      mytheme: {

        "primary": "#008eff",

        "secondary": "#00c6ff",

        "accent": "#00e38e",

        "neutral": "#1d1d1d",


        // "base-100": "#D69E36",

        "base-200": "#F0F2F5",

        "base-300": "#bebebe",

        "base-content": "#fff",

        "info": "#0072de",

        "success": "#42d242",

        "warning": "#ff8600",

        "error": "#ff8d8c",
      },
    }],
  },
}

