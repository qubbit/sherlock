const fs = require('fs');
const postcss = require('postcss');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
var colorFunction = require("postcss-color-function")


const SOURCE='assets/css/screen.css'
const DEST='assets/css/screen.compiled.css'

fs.readFile(SOURCE, (err, css) => {
  postcss([precss, autoprefixer, colorFunction]) // 1. usage here
    .use(colorFunction) // 2. usage here
    .process(css, { from: SOURCE, to: DEST })
    .then(result => {
      fs.writeFile(DEST, result.css, () => true);
      if ( result.map ) {
        fs.writeFile(DEST + '.map', result.map, () => true);
      }
    });
});
