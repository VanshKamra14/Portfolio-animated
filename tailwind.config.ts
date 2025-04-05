import type { Config } from "tailwindcss";

export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css"
   ],
    darkMode: "class",
    theme: {
      extend: {
        backgroundImage: {
           "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        },
        spacing: {
          '14': '3.5rem', // This adds w-14, h-14, etc.
        },
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          primary: "var(--primary)",
          card: "var(--card)",
        }
      },
    },
    plugins: [],
  } satisfies Config;