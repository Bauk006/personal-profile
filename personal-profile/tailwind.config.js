/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Tambahkan Font Poppins
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      // Tambahkan Warna Utama dari Desain Figma
      colors: {
        "cream": "#E3DCCC",
        "grayish-blue": "#5A5F73",
        "primary-dark": "#333333",
        "primary-green": "#AED581",
        "border-gray": "#E5E7EB",
      },
      //Background/Button Gradient
      backgroundImage: {
        "hero-gradient": "linear-gradient(90deg, #FFFFFF 0%, #AED581 100%)",
        "btn-gradient": "linear-gradient(90deg, #E3DCCC 0%, #AED581 100%)",
      },
    },
  },
  plugins: [],
};
