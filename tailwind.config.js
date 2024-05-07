/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        textPrimary : "#555",
        txtLight : "#999",
        txtDark : "#222",
        tgPrimary:"#f1f1f1",
      },
  },

},
  plugins: [require("tailwind-scrollbar")],
}

