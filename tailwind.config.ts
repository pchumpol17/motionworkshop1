import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f19509",
        primaryDark: "#e86f00",
        lightOrange: "#f1dabf",
        darkGray: "#1a1f25",
        lightGray: "#272c35"
      },
      container: {
        center: true, //ให้ container แนวนอนอยู่ตรงกลาง หรือ 0 auto นั่นเอง
        padding: {
          DEFAULT: "1rem",  //กำหนดให้ container มี padding เป็น default คือ 1rem = 16px
          sm: "2rem"
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
