/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: { 
      fontFamily:{
      "Dana":"Dana",
      "Medium":"Medium",
      "DanaDemiBold":"DanaDemiBold",
      "Morabbalight":"Morabblight",
      "MorabbMedium":"MorabbMedium",
      "MorabbaBold": "MorabbaBold"
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }, 
    colors: {
      body:{10:'#F2F2F2'},
      green: {
        10: '#1DCD9C',
       
      },
      greens: {
        20: '#1DCD9C',
       
      },

    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        lg:"0.625"
      }, },
  },},

  plugins: [],
}

