/* eslint-disable quotes */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Disket", "DisketBold"],
      },
      backgroundPosition: {
        heroMobilePos: "65% 40%",
        cardPos: "60% 20%",
      },
      backgroundSize: {
        heroMobileSize: "100vh",
      },
    },
    container: {
      center: true,
    },
    // textColor: (theme) => theme("colors"),
    textColor: {
      color1: "#d99191",
      color2: "#dfa98c",
      color3: "#b3b9b5",
      color4: "#8dbdd7",
      color5: "#e5e7eb",
      color6: "#1f2937",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
