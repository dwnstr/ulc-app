import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      
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
