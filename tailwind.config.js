
// tailwind.config.js
/*eslint-env node*/

const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require("postcss-import"),
    require("@tailwindcss/nesting")(require("postcss-nesting")),
    require("tailwindcss"),
    require("autoprefixer"),
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        // ... custom themes

        mytheme: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: "#ffffff",
            foreground: "#616376",

            // gris consultic con negro gris de letra
            primary: {
              DEFAULT: "#F7F7F9",
              foreground: "#616376",
              background: "#000000",
            },

            // morado consultic con letra blanca
            secondary: {
              DEFAULT: "#5A5FE0",
              foreground: "#F7F7F9",
              background: "#000000",
            },

            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};

