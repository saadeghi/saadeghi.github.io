const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/app.html',
    './src/routes/**/*.svelte'
  ],
  // plugins: [
  //   require('@tailwindcss/typography'),
  //   require('daisyui')
  // ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Montserrat Alternates', ...defaultTheme.fontFamily.sans],
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  // daisyui:{
  //   themes:[
  //     "lofi"
  //   ]
  // },
}
