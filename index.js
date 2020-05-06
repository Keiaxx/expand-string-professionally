module.exports = function (str, numSpaces) { return str.split('').join(' '.repeat(parseInt(numSpaces) ? numSpaces : 1)) };
