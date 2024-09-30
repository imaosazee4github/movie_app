/** @type {import('tailwindcss').Config} */
// module.exports = {
//  
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out',
      },
    },
  },
};


