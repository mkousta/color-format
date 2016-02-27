# colorformat
A JavaScript lib to convert color format from RGB to HEX and vice versa

## Installation

```
npm install colorformat
```

## Example use cases

Convert an RGB to HEX:

```
cf = require('colorformat');

cf.rgbToHex(230, 241, 246); // => '#e6f1f6'

or

cf.rgbToHex('230', '241', '246'); // => '#e6f1f6'
```

Convert a HEX to RGB:

```
cf = require('colorformat');

cf.hexToRgb('#e6f1f6'); //=> [ 230, 241, 246 ]

or // if you want a styling string format

cf.hexToRgb('#e6f1f6', { styling: true }); //=> 'rgb(230, 241, 246)'

```

Note: [UMD](https://github.com/umdjs/umd) is also supported for browser use.
