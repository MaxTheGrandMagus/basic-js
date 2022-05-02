const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
    this.alphabet = Array.from(Array(26)).map((e, i) => e = String.fromCharCode(i + 65));
  }
  encrypt(message, key) {
    if (!arguments[0] || !arguments[1]) {
      throw new Error(`Incorrect arguments!`);
    }
    let encryptKey = '';
    let encryptArray = [];
    let filteredMessage = message.toUpperCase().split('').filter(e => /[a-z]/gi.test(e)).join('');
    while (key.length < filteredMessage.length) {
      key = key.toUpperCase().repeat(2);
    }
    key = key.slice(0, filteredMessage.length);
    for (let index in filteredMessage) {
      let encryptIndex = this.alphabet.findIndex(e => e === filteredMessage[index]) + this.alphabet.findIndex(e => e === key[index]);
      if (encryptIndex < 26) {
        encryptKey += String.fromCharCode(encryptIndex + 65);
      } else {
        encryptKey += String.fromCharCode(encryptIndex + 39);
      }
    }
    let ind = 0;
    for (let index in message) {
      if (/[a-z]/gi.test(message[index])) {
        encryptArray.push(encryptKey[ind]);
        ind++;
      } else {
        encryptArray.push(message[index]);
      }
    }
    return this.type === false
    ? encryptArray.reverse().join('')
    : encryptArray.join('');
  }

  decrypt(message, key) {
    if (!arguments[0] || !arguments[1]) {
      throw new Error(`Incorrect arguments!`);
    }
    let decryptKey = '';
    let decryptArray = [];
    let filteredMessage = message.split('').filter(e => /[a-z]/gi.test(e)).join('');
    while (key.length < filteredMessage.length) {
      key = key.toUpperCase().repeat(2);
    }
    key = key.slice(0, filteredMessage.length);
    for (let index in filteredMessage) {
      let decryptIndex = 26 - this.alphabet.findIndex(e => e === key[index]) + this.alphabet.findIndex(e => e === filteredMessage[index]);
      if (decryptIndex > 25) {
        decryptKey += String.fromCharCode(decryptIndex + 39);
      } else {
        decryptKey += String.fromCharCode(decryptIndex + 65);
      }
    }
    let ind = 0;
    for (let index in message) {
      if (/[a-z]/gi.test(message[index])) {
        decryptArray.push(decryptKey[ind]);
        ind++;
      } else {
        decryptArray.push(message[index]);
      }
    }
    return this.type === false
      ? decryptArray.reverse().join('')
      : decryptArray.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
