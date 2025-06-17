module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: '#f472b6',   // Soft pink
        secondary: '#f9a8d4', // Light pink
        accent: '#fef3c7',    // Soft yellow
      },
    },
  },
  plugins: [],
}
