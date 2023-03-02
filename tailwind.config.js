/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: "#F5FBEE",
          100: "#ECF7DE",
          200: "#D9EFBD",
          300: "#C8E9A0",
          400: "#B5E17F",
          500: "#A2D95E",
          600: "#85CA30",
          700: "#649924",
          800: "#416317",
          900: "#20320C",
          1000: "#1B290A",
          1100: "#131D07",
        }
      },
      fontFamily: {
        golos: ['var(--font-golos)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
