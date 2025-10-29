/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,vue}"],

  safelist: [
    // Backgrounds & Borders
    "group-hover:bg-kilvish-100",
    "group-hover:bg-kilvish-500",
    "group-hover:bg-kilvish-700",
    "group-hover:bg-others-superman",
    "group-hover:border-kilvish-400",
    "group-hover:border-kilvish-600",

    // Text Colors
    "group-hover:text-others-superman",
    "text-others-superman",
    "text-others-ultraman",
    "text-kilvish-500",

    // Misc Hover Effects
    "hover:border-kilvish-400",
    "hover:border-kilvish-600",
    "hover:text-kilvish-400",
  ],

  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem", // 10px
        xs: "0.75rem",   // 12px
        sm: "0.875rem",  // 14px
        base: "1rem",    // 16px
        lg: "1.125rem",  // 18px
        xl: "1.25rem",   // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem",  // 36px
        "5xl": "3rem",     // 48px
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      boxShadow: {
        light: "0 2px 4px rgba(0, 0, 0, 0.05)",
        medium: "0 4px 6px rgba(0, 0, 0, 0.1)",
        strong: "0 10px 15px rgba(0, 0, 0, 0.2)",
      },

      colors: {
        kilvish: {
          100: "#E6EEFE",
          200: "#BDD2FD",
          300: "#94B7FB",
          400: "#6B9BF9",
          500: "#427FF7",
          600: "#0C63F4",
          700: "#094FC3",
          800: "#063B93",
          900: "#042862",
        },
        others: {
          superman: "#0C63F4",
          ultraman: "#FF4757",
        },
      },
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        },
      });
    },
  ],

  corePlugins: {
    container: false,
  },
};
