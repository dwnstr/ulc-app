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
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-radix")(),
    // ...
  ],
};
export default config;
