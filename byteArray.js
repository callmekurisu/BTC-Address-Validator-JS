'use strict'
/**
 * Conversion to Byte Array
 * @param BigInt
 */
const toByteArray = (x) => {
  let hexString = x.toString(16);
  if (hexString.length % 2 > 0) hexString = "0" + hexString;
  let byteArray = [];
  let byteArray2 = [];
  for (let i = 0; i < hexString.length; i += 2) {
    byteArray.push(parseInt(hexString.slice(i, i + 2), 16));
  };
  byteArray.forEach(element => {
    if (element > 127) {
      byteArray2.push(element - 256);
    } else {
      byteArray2.push(element);
    };
  });
  return byteArray2;
};

module.exports = toByteArray;