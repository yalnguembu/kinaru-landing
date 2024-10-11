import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'up-down': {
          'from': { transform: 'translateY(-100px)' },
          'to': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        'up-down': 'up-down 500ms linear',
        'spin-low': 'spin 10s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)"
      },
    },
  },
  plugins: [],
};
export default config;
