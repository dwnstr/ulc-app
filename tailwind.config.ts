import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shark: {
          50: "#EEEFF2",
          100: "#DCDFE4",
          200: "#BDC2CC",
          300: "#9AA2B1",
          400: "#788297",
          500: "#5B6476",
          600: "#434956",
          700: "#282C34",
          800: "#1F2228",
          900: "#181B20",
          950: "#14161A",
        },
      },
      
      keyframes: {
        slideUpAndFade: {
          //@ts-ignore
          from: { opacity: 0, transform: 'translateY(2px)' },
          //@ts-ignore
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          //@ts-ignore
          from: { opacity: 0, transform: 'translateX(-2px)' },
          //@ts-ignore
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideDownAndFade: {
          //@ts-ignore
          from: { opacity: 0, transform: 'translateY(-2px)' },
          //@ts-ignore
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          //@ts-ignore
          from: { opacity: 0, transform: 'translateX(2px)' },
          //@ts-ignore
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-radix")(),
    // ...
  ],
};
export default config;
