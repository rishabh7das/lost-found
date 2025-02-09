/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "fontFamily":{
        "anton":["Anton", "sans-serif"],
        "josefin":["Josefin Sans", "sans-serif"],
        "spartan":["League Spartan", "sans-serif"]
      },
      "height": {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
        "75v": "75vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
    },
  },
  plugins: [],
}

