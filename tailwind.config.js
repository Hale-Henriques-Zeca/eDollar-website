/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001220",
        neonBlue: "#3b82f6",
        neonPink: "#ec4899",
        neonGreen: "#22c55e",
      },

      animation: {
        "spin-slow": "spin 6s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },

      keyframes: {
        glow: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 1 },
        },

        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      boxShadow: {
        neon: "0 0 20px rgba(59,130,246,0.5)",
        pink: "0 0 25px rgba(236,72,153,0.5)",
        glass: "0 8px 32px rgba(0,0,0,0.3)",
      },

      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;