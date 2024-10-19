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
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-100": "#B0B5BE", // French gray for background
          primary: "#EEC13A", // Saffron for CTA (buttons, etc.)
          secondary: "#2F2F2E", // Jet for text
          accent: "#B0B5BE", // French gray for other elements
          neutral: "#2F2F2E", // Jet for neutral element
          "text-primary-content":"#7b8089"
        },
      },
    ],
  },
};
export default config;
