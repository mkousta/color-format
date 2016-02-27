(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ColorFormat = factory();
  }
}(this, function () {
  function hexToDec(n) {
    return n.toString(16);
  }

  function decToHex(n) {
    return parseInt(n, 16);
  }
  return {
    rgbToHex: function(r, g, b) {
      if(typeof r!=='number' || typeof g!=='number' || typeof b!=='number') {
        if(typeof r!=='string' || typeof g!=='string' || typeof b!=='string') {
          throw new TypeError('Expected arguments to be numbers or strings');
        } else {
          r = parseInt(r, 10);
          g = parseInt(g, 10);
          b = parseInt(b, 10);
        }
      }
      if(r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255)
        throw new Error('Expected arguments to be between 0 and 255');
      return '#' + hexToDec(r) + hexToDec(g) + hexToDec(b);
    },

    hexToRgb: function(h, options) {
      if(typeof h !== 'string') throw new TypeError('Expected a string input');

      if(h[0] === '#') h = h.slice(1);

      if(h.length === 3) h = h.replace(/(\w)/g, '$&$&');

      if(h.length != 6) throw new TypeError('Expected a 3 or 6 digit hex');

      if(options && options.styling)
        return 'rgb(' + decToHex(h[0]+h[1]) + ', ' + decToHex(h[2]+h[3]) + ', ' + decToHex(h[4]+h[5]) + ')';
      else
        return [decToHex(h[0]+h[1]), decToHex(h[2]+h[3]), decToHex(h[4]+h[5])];
    }
  };
}));
