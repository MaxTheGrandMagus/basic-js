const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (!arr.length) {
    return [];
  }
  let transformed = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (i !== arr.length - 1) {
        i += 2;
      } else {
        i++;
      }
      continue;
    }
    if (arr[i] === '--discard-prev') {
      transformed.splice(-1);
      i++;
    }
    if (arr[i] === '--double-prev') {
      if (i !== 0) {
        transformed.push(arr[i - 1]);
        i++;
      } else {
        continue
      }
    }
    if (arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
        transformed.push(arr[i + 1]);
      }
    }
    else transformed.push(arr[i]);
  }
  return transformed;
}

module.exports = {
  transform
};
