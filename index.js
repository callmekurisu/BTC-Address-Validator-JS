// This project requires Node 11.6+
const toByteArray = require('./byteArray');
const decodeBase58To25Bytes = require('./decodeBase58');
const sha256 = require('js-sha256').sha256;
/**
 * Validate base 58 address
 */
validateAddress = addy => {
  // Check length of address
  const result = addy.length < 26 || addy.length > 35 ? false : true;
  // Verify decoded address !null
  if(!result){
    return "Invalid address length";
  }
  const decoded = decodeBase58To25Bytes(addy);
  if (decoded === null){
    return "Invalid address type";
  }

  // Hash decoded element 0-21
  // Hash that hash
  // Check if second hash elements 0-4 match decoded 21, 25
  let hash1 = sha256(decoded.slice(0,21));
  let h1ByteArray = toByteArray(hash1);
  let hash2 = sha256(h1ByteArray);
  let hash2ByteArray = toByteArray(hash2);
  // If address is not valid show error in console
  const output = hash2ByteArray.slice(0,4).toString() === decoded.slice(21,25).toString() ?
  true : false;
  return output;
}

module.exports = validateAddress;
