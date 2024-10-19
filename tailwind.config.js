module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',  // Add this line for your TSX files
  ],
  theme: {
    extend: {
      animation: {
        'frame-7-slidein': 'frame-7-slidein 100s infinite alternate forwards',
      },
      keyframes: {
        'frame-7-slidein': {
          '0%': { backgroundPosition: 'top', backgroundSize: '3000px' },
          '100%': { backgroundPosition: '-100px 0px', backgroundSize: '2750px' },
        },
      },
    },
  },
  plugins: [],
}
