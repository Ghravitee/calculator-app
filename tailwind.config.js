/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'Purple': "hsl(259, 100%, 65%)",
        "Light-Red": "hsl(0, 100%, 67%)",
        "Off-White": "hsl(0, 0%, 94%)",
        "Light-Grey": "hsl(0, 0%, 86%)",
        "Smokey-Grey": "hsl(0, 1%, 44%)",
        "Off-Black": "hsl(0, 0%, 8%)",
      },

      fontFamily: {
        'poppins': ["poppins"],
      },
    },
  },
  plugins: [],
};
