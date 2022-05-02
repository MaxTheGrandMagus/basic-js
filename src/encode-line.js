const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let letterCount = 1;
  let encoded = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      letterCount++
    } else if (letterCount === 1) {
      encoded += str[i];
    } else {
      encoded += `${letterCount}` + `${str[i]}`;
      letterCount = 1;
    };
  };
  return encoded;
}

module.exports = {
  encodeLine
};
