/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'hero': "url('https://res.cloudinary.com/decwhxo32/image/upload/v1730983883/2024-09-10_ednfrt.jpg')",
    
      },
    },
  },
  plugins: [],
}