module.exports = {
  corePlugins: {
    preflight: false,
    gridTemplateColumns: true,
  },
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1480px',
    },
    extend: {
      colors: {
        'primary': '#00d1ff',
        'secondary': '#e077ff',
        'greenish-blue': '#adffed',
        'blue-gray': '#cfe1e6'
      }
    }
  },
  variants: {},
  plugins: []
}
