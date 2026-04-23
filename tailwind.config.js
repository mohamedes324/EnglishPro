/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        primaryHover: "#2563EB",
        secondary: "#10B981",
        accent: "#F59E0B",
        bg: "#F9FAFB",
        surface: "#FFFFFF",
        border: "#E5E7EB",
        textPrimary: "#111827",
        textSecondary: "#6B7280",
        textMuted: "#9CA3AF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        arabic: ["Cairo", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)",
        card: "0 4px 24px -4px rgba(0,0,0,0.08)",
        glow: "0 0 30px rgba(59,130,246,0.15)",
      },
    },
  },
  plugins: [],
};
