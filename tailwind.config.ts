import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          baby: "#2D5123",
          light: "#3D6B30",
          dark: "#1F3A18",
        },
        pink: {
          baby: "#F4CCE2",
          deep: "#E8A0BF",
          pale: "#FAE6F0",
        },
        sand: {
          baby: "#F7F1EB",
          light: "#FBF8F5",
        },
        cream: "#FFFDF9",
      },
      fontFamily: {
        display: ["var(--font-display)", '"Arial Black"', "Impact", "sans-serif"],
        condensed: ["var(--font-condensed)", '"Arial Narrow"', "Arial", "sans-serif"],
        body: ["var(--font-body)", "Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        hard: "6px 6px 0 #1F3A18",
        soft: "0 20px 60px rgba(45, 81, 35, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
