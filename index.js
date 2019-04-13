// This project requires Node 11.6+
const toByteArray = require('./byteArray');
const decodeBase58To25Bytes = require('./decodeBase58');
const sha256 = require('js-sha256').sha256;
/**
 * Validate base 58 address
 */
validateAddress = addy => {
  // Check length of address
  const RESULT = addy.length < 26 || addy.length > 35 ? false : true;
  // Verify decoded address !null
  if(!RESULT){
    return "Invalid address length";
  }
  const DECODED = decodeBase58To25Bytes(addy);
  if (DECODED === null){
    return "Invalid address type";
  }

  // Hash decoded element 0-21
  // Hash that hash
  // Check if second hash elements 0-4 match decoded 21, 25
  let hash1 = sha256(DECODED.slice(0,21));
  let h1ByteArray = toByteArray(hash1);
  let hash2 = sha256(h1ByteArray);
  let hash2ByteArray = toByteArray(hash2);
  // If address is not valid show error in console
  const result = hash2ByteArray.slice(0,4).toString() === DECODED.slice(21,25).toString() ?
  true : false;
  return result;
}

module.exports = validateAddress;
