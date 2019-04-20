'use strict'
/**
 * Initialized alphanumeric characters
 */
const alphanum =
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const toByteArray = require('./byteArray');
/**
 * Conversion from 58 to 25 bytes
 * @param {String} input base 58 address
 */
const decodeBase58To25Bytes = (input) => {
  let num = BigInt(0);
  let arr = input.split("");
  let charArray = [];
  arr.forEach((char, i) => {
    const p = alphanum.indexOf(char);
    if (p !== -1) {
      charArray.push(p);
    }
    num = ((num * (BigInt(58))) + (BigInt(p)));
  });

  const result = Array(25);
  const numBytes = toByteArray(num);

  let i = numBytes.length;
  while (i--) result[i] = numBytes[i];
  /*
   * This array should be 24 or 25 in length
   * If it is 25, gtg
   * If its 24 remove undefined and insert 0 at the beginning
   *
   */
  if (numBytes.length < 25) {
    result.pop();
    result.unshift(0);
  }
  return result;
}

module.exports = decodeBase58To25Bytes;