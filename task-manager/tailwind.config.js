module.exports = {
  darkMode: "class", // 👈 This is essential
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: '#f472b6',
        secondary: '#f9a8d4',
        accent: '#fef3c7',
      },
    },
  },
  plugins: [],
};

