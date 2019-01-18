// This project requires Node 11.6+
const crypto = require('crypto');
const TO_BYTE_ARRAY = require('./byteArray');
const DECODE_BASE_58 = require('./decodeBase58');
const SHA256 = require('js-sha256').sha256;
validateAddress = addy => {
  // Check length of address
  const RESULT = addy.length < 26 || addy.length > 35 ? false : true;
  // Verify decoded address !null
  if(!RESULT){
    return console.error("Invalid address length");
  }
  const DECODED = decodeBase58To25Bytes(addy);
  if (DECODED === null){
    return console.error("Invalid address type");;
  }

  // Hash decoded element 0-21
  // Hash that hash
  // Check if second hash elements 0-4 match decoded 21, 25
  let hash1 = SHA256(DECODED.slice(0,21));
  let h1ByteArray = TO_BYTE_ARRAY(hash1);
  let hash2 = SHA256(h1ByteArray);
  let hash2ByteArray = TO_BYTE_ARRAY(hash2);
  // If address is not valid show error in console
  hash2ByteArray.slice(0,4).toString() === DECODED.slice(21,25).toString() ?
  true : console.error("Invalid address");
}

module.exports = validateAddress;