/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {  
      backgroundImage: {
        "text-gradient": "linear-gradient(45deg, #4b25ea, #bd18e6, #fb590e)",
        "line-gradient": "linear-gradient(270deg, rgba(255, 255, 255, 0.0001) 0%, rgba(255, 255, 255, 0.703043) 100%)",
        "gradient": "linear-gradient(45deg, #4b25ea, #bd18e6, #fb590e)",
        "card-gradient":"linear-gradient(45deg, rgb(189 24 230 / 10%), rgb(251 89 14 / 10%))",
        "cards-gradient":"linear-gradient(180deg, rgba(255, 255, 255, 0.135162) 0%, rgba(255, 255, 255, 0.0001) 100%)",
        "banner-gradient": "linear-gradient(45deg, #5025ea, #bd18e6, #fb590e)",
        "footer-gradient": "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(47, 40, 72, 1) 100%)",
        "second-gradient": "linear-gradient(45deg, rgba(75, 37, 234, 0.04), rgba(10, 194, 255, 0.04))",
        "text2-gradient": "linear-gradient(45deg, #4b25ea, #0ac2ff)",
        "blue-gradient":"linear-gradient(45deg, #4b25ea, #0ac2ff)",
   
      },
      fontFamily:{
        mont:['Montserrat', 'sans-serif']
      },
      fontSize:{
        main_heading:"50px"
      },
      text:{
        gradient: "linear-gradient(45deg, #4b25ea, #bd18e6, #fb590e)",
      },
      colors:{
        
      }, 
     
      animation: {
        'infinite-scroll': 'infinite-scroll 10s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }      
    },
  },
  plugins: [],
};
