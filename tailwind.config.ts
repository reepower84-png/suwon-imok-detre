import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1280px"
      }
    },
    extend: {
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "sans-serif"
        ],
        serif: ["Cormorant Garamond", "Noto Serif KR", "serif"]
      },
      colors: {
        ink: {
          DEFAULT: "#0c0c0d",
          soft: "#1a1a1c"
        },
        sand: "#f4efe7",
        gold: {
          light: "#cdb27a",
          DEFAULT: "#a8854a",
          dark: "#7a5f33"
        }
      },
      letterSpacing: {
        widest: "0.32em"
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease-out both",
        "slow-zoom": "slowZoom 12s ease-out forwards"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        slowZoom: {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
