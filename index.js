function hexToDec(n) {
  return n.toString(16);
}

function decToHex(n) {
  return parseInt(n, 16);
}

module.exports = {
  rgbToHex: function(r, g, b) {
    return '#' + hexToDec(r) + hexToDec(g) + hexToDec(b);
  },

  hexToRgb: function(h) {
    h = h.slice(1);
    return [decToHex(h[0]+h[1]), decToHex(h[2]+h[3]), decToHex(h[4]+h[5])];
  }
};
