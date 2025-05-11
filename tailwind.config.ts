import { type Config } from 'tailwindcss'

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily : {
          karla: ['Karla','sans-serif'],
          league_spartan: ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}

export default config
