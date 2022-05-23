module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(10, 79%, 65%)",
        "hovered-soft-red": "rgba(236, 119, 95, 0.7)",
        cyan: "hsl(186, 34%, 60%)",
        "hovered-cyan": "rgba(118, 181, 188, 0.7)",
        "dark-brown": "hsl(25, 47%, 15%)",
        "medium-brown": "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        "very-pale-orange": "hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
