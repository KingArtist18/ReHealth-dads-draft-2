import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1F5A92",
          "blue-deep": "#163F69",
          "blue-ink": "#0E2B49",
          green: "#357B58",
          "green-deep": "#26593F",
          copper: "#B87333",
          charcoal: "#222222",
          mist: "#EEF3F8",
          paper: "#F7F8FA",
        },
      },
      fontFamily: { sans: ["var(--font-poppins)", "system-ui", "sans-serif"] },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(14,43,73,0.25)",
        lift: "0 24px 60px -20px rgba(14,43,73,0.4)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        shimmer: { "100%": { transform: "translateX(100%)" } },
      },
      animation: { float: "float 7s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
