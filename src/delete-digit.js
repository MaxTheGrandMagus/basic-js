const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  n = String(n).split('');
  let maxNum = 0;
  for (let i = 0; i < n.length; i++) {
    const arrCopy = [...n];
    arrCopy.splice(i, 1);
    const arrNum = Number(arrCopy.join(''));
    if (arrNum > maxNum) {
      maxNum = arrNum
    };
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
