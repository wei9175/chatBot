/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:{
    themes: [
      {
        mytheme: {
          "primary": "#FFFFFF",
          "secondary": "#eab308",
          "base-100": "#ffffff",
          "base-300": "#f5f5f4"
        },
      },
    ],
  }
}


