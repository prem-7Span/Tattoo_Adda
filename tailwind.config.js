/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.vue"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        maxWidth: "1600px", // Adjust the width as per your requirement
        screens: {
          xs: "540px",
          sm: "720px",
          md: "960px",
          lg: "1400px",
          xl: "1600px",
        },
      },
    },
  },
  plugins: [],
};
