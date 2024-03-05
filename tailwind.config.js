/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    colors: {
      primary: "#0f372b",
      secondary: "#ffefdb",
      tertiary: "#8b8378",
      accent: "#eedfcc",
      google: "#F14236",
      danger: "#ff4638",
      warning: "	#f6cc00",
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
