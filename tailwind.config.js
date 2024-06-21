/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': {'max': '639px'},
    },
    fontSize: {
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
        '28px': '28px',
        '48px': '48px',
        '240px': '240px',
      },
    fontFamily: {
      inter: ["Inter",  "sans-serif" ,],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
      anton: ['Anton', ],
      jakarta: ["Plus Jakarta Sans"],
    },
    // fontWeight: {
    //     Medium: 500,
    //   },
    colors: {
      
      white: "#fff",
      black: "#000",
      transparent: "#ffffff00",
     
      
      
      
     
      yellow: {
       69: "#FFD446",

        
      },
      "pure-greys": {
        10 : "#15130499",

        
      },
    },
    extend: {
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      },
      backgroundColor: {
        'custom-yellow': 'rgba(252, 248, 231, 1)',
      },
    },
  },
  plugins: [],
};