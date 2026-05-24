import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#102033",
        mist: "#f5f9fb",
        crystal: "#6aaed6",
        tide: "#1d5f86",
        night: "#07111f"
      },
      fontFamily: {
        sans: [
          '"Noto Sans TC"',
          '"Microsoft JhengHei"',
          "Inter",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(12, 57, 88, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
