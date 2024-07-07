/** @type {import('tailwindcss').Config} */

/********************
Guide to customize daisy components: 
https://daisyui.com/theme-generator/

List of all color names: 
https://daisyui.com/docs/colors/
********************/

const twColors = require("tailwindcss/colors");
const customColors = {
  primary: "#2d314d",
  "primary-content": "#FFFFFF",
  secondary: "#31d35c",
  "secondary-content": "#FFFFFF",
  accent: "#2bb7da",
  "accent-content": "#FFFFFF",
  neutral: twColors.gray["200"],
  "neutral-focus": twColors.gray["300"],
  "neutral-content": twColors.gray["800"],
  base: {
    100: "#fafafa",
    200: "#F4F5F7",
    300: "#9698a6",
    content: "#FF0000",
  },
  info: "#66D6F5",
  "info-content": "#FFFFFF",
  success: "#1AD575",
  "success-content": "#FFFFFF",
  warning: "#F0C505",
  "warning-content": "#FFFFFF",
  error: "#E5667E",
  "error-content": "#FFFFFF",
};

module.exports = {
  content: ["./*.{html,php}", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        ...customColors,
      },
      fontFamily: {
        primary: ["Public Sans-Regular", "sans-serif"],
        secondary: ["Public Sans-Light", "sans-serif"],
        tertiary: ["Public Sans-SemiBold", "sans-serif"],
      },
      backgroundImage: {
        "hero-mobile": "url('../../../src/img/bg-intro-mobile.svg')",
        "hero-desktop": "url('../../../src/img/bg-intro-desktop.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    prefix: "ds-",
    themes: [
      {
        light: {
          ...require("./node_modules/daisyui/src/colors/themes")[
            "[data-theme=light]"
          ],
          ...customColors,
        },
      },
    ],
  },
};
