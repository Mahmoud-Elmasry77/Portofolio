const { text } = require('@fortawesome/fontawesome-svg-core');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily :{
        Roboto : ["Roboto", "serif"]
      },
      colors:{
        hover:"#7f3a8b",
        bgColor :'#ba68c8',
        bgScound:'#ccc'
      },
      textColor:{
        text : "#fff",
        textS:'#ba68c8',
        p:"#6d6d6d"
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      keyframes:{

        h1 : {
        "0%":{ "border-style" : 'hidden'},
        "50%":{"border-style" : "solid"},
        "100%" : {"border-style" : 'hidden'}
        },
        div:{
          "from" : {"width" : "0px"},
          "to" : {"width" : "400px"}
        },
        divsm:{
          "from" : {"width" : "0px"},
          "to" : {"width" : "315px"}
        }
      },

      animation:{
        h1 : 'h1 1s ease-in 20 both',
        div : 'div 4s linear 2s 1 forwards',
        divsm : 'divsm 4s linear 2s 1 forwards',
      }
     
    },
  },
  plugins: [],
}

