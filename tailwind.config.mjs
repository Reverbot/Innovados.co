/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        pulseCircle: "pulse-animation 1s",
      },
      keyframes: {
        "pulse-animation": {
          "0%": {
            boxShadow: "0 0 0 0px #3b82f6",
          },
          "100%": {
            boxShadow: "0 0 0 20px rgba(0, 0, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
