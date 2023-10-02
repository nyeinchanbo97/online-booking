/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js}",
"./src/**/*.{js,ts,jsx,tsx}",
"./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
    fontFamily:{
      "roboto": ['Roboto'],
      'monalt': ['Montserrat Alternates'],
      'montserrat' : ['Montserrat','sans-serif']
    }
    },
  },
  plugins: [require("daisyui")],
 

}

