/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        surface2: "var(--surface2)",
        border: "var(--border)",
        border2: "var(--border2)",
        accent: "var(--accent)",
        "accent-h": "var(--accent-h)",
        "accent-dim": "var(--accent-dim)",
        "accent-border": "var(--accent-border)",
        text: "var(--text)",
        muted: "var(--muted)",
        muted2: "var(--muted2)",
        "code-bg": "var(--code-bg)",
        "nav-bg": "var(--nav-bg)",
        "num-ghost": "var(--num-ghost)",
      },
      fontFamily: {
        mono: ["'Space Mono'", "monospace"],
        syne: ["'Syne'", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blink: "blink 0.75s step-end infinite",
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.3)" },
        },
      },
    },
  },
  plugins: [],
};
