module.exports = {
  content: [
    "./index.html",
    "./resource/**/*.js",
    "./resource/**/*.scss"
  ],
  stats: {
    children: true,
  },
  theme: {
    extend: {
      spacing: {
        '128': '128px',
      }
    },
    colors: {
      blue: {
        100: '#bfbdff',
        200: '#7572ff',
        300: '#0600ff'
      }
    },
  }
}
