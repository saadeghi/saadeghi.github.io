const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  // daisyui:{
  //   themes:[
  //     "lofi"
  //   ]
  // }
};
