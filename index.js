function hexToDec(n) {
  return n.toString(16);
}

function decToHex(n) {
  return parseInt(n, 16);
}

module.exports = {
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

  hexToRgb: function(h) {
    if(typeof h !== 'string') throw new TypeError('Expected a string input');

    if(h[0] === '#') h = h.slice(1);

    if(h.length != 6) throw new TypeError('Expected a 6 digit hex');

    return [decToHex(h[0]+h[1]), decToHex(h[2]+h[3]), decToHex(h[4]+h[5])];
  }
};
