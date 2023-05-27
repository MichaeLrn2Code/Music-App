module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      // background: "#000000",
      background:"#080929",
      primary: "#FFFFFF",
      secondary: "#9E9E9E",
      active: "#1BB954",
      important: "#c79e16",
      light: "#121212",
      emerald:"#059669",
      winered:"#b02a8c"
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
