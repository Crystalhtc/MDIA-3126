/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"], //also target the files in components //** any folders inside, * any files inside 
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

// helping tailwind point to find our css files