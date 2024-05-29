/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          paddingLeft: "1rem",
          paddingRight: "1rem",
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "100%",
            // maxWidth: '640px',
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
          "@screen md": {
            maxWidth: "100%",
            // maxWidth: '768px',
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
          "@screen lg": {
            maxWidth: "100%",
            // maxWidth: '1000px',
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
          "@screen xl": {
            maxWidth: "1280px",
            // maxWidth: '1150px',
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
          "@screen 2xl": {
            maxWidth: "1350px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
        },
      });
    },
  ],
};
