/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_600: "#4F4DE1",
        primary_500: "#6260ED",
        primary_400: "#7674FF",
        primary_300: "#9796FF",
        primary_200: "#BCBBFF",
        primary_100: "#E4E3FF",
        primary_50: "#F2F2FF",
        gray_900: "#172E48",
        gray_800: "#314358",
        gray_700: "#6D7884",
        gray_600: "#788492",
        gray_500: "#B9BFC6",
        gray_400: "#CED4DA",
        gray_300: "#EAEEF1",
        gray_200: "#F1F3F5",
        gray_100: "#F8F9FA",
        white: "#FFFFFF",
        function_error: "#F25B5A",
        function_success: "#4BCCAE",
        function_warning: "#FFD84E",
        tag_orange: "#FF9A24",
        tag_green: "#22B8CF",
        tag_blue: "#5C7CFA",
        tag_red: "#F57078",
      },
      fontSize: {
        xxs: "8px",
        xs: "12px",
        s: "14px",
        m: "18px",
        l: "24px",
        xl: "28px",
        xxl: "32px",
      },
      fontWeight: {
        bold: "800",
        semiBold: "600",
        default: "400",
        light: "200",
      },
      backgroundImage: {
        thumbnail: "url(/images/phone-1.png)",
        wake_up: "url(/images/wake-up-min.jpg)",
        product_one: "url(/images/phone-1-min.png)",
        product_two: "url(/images/phone-2-min.png)",
        product_three: "url(/images/phone-3-min.png)",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-opacity": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-in",
        "fade-in-up": "fade-in-up 1.5s ease-in-out forwards",
        "fade-opacity": "fade-opacity 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
