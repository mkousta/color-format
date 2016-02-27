# color-format
A JavaScript lib to convert color format from RGB to HEX and vice versa

## Example use cases

Convert an RGB to HEX:

```
cf = require('color-format');

cf.rgbToHex(230, 241, 246); // => '#e6f1f6'

or

cf.rgbToHex('230', '241', '246'); // => '#e6f1f6'
```

Convert a HEX to RGB:

```
cf = require('color-format');

cf.hexToRgb('#e6f1f6'); //=> [ 230, 241, 246 ]
```
