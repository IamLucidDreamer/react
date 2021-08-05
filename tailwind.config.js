module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('argus website/PNG/Insta Argus12.png')",
        'footer': "url('argus website/PNG/Footerbg.png')",
        'mapbg': "url('argus website/PNG/World Map.png')",
        'aboutbg':"url('argus website/PNG/Image Thumbnail2.png')",
        'servicesbg':"url('argus website/PNG/Image Thumbnail.png')",
        'jobsbg':"url('argus website/PNG/Image Thumbnail1.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
