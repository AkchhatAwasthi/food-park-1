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
        background: "var(--background)",
        foreground: "var(--foreground)",
        forest: "#3D4A2E",
        lime: "#D4DF00",
        cream: "#EDD9B4",
        acid: "#C8D400",
        gray: "#D0D0CE",
        richblack: "#1C1C1A",
        white: "#FFFFFF",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dmsans: ["var(--font-dmsans)", "sans-serif"],
        spacegrotesk: ["var(--font-space-grotesk)", "sans-serif"],
        dailywalker: ["var(--font-caveat)", "cursive"],
      },
      letterSpacing: {
        editorial: "-0.03em",
        tag: "0.12em",
      },
    },
  },
  plugins: [],
};
export default config;
