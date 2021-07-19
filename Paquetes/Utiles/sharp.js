const sharp = require('sharp');

sharp('./JS_logo.png')
    .resize(80)
    .grayscale()
    .toFile('JS_logo_resized.png');