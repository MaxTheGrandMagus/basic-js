const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    if (value === undefined) { value = `( )` };
    this.chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position >= this.chainArr.length) {
      this.chainArr.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.chainArr.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
    this.chainArr.reverse()
    return this;
  },
  finishChain() {
    let finishedChain = this.chainArr.join('~~');
    this.chainArr.length = 0;
    return finishedChain;
  }
};

module.exports = {
  chainMaker
};
