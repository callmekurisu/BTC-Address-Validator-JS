// This project requires Node 11.6+
import { createByteArray } from './byteArray';
import { decodeBase58To25 } from './decodeBase58';
import { sha256 } from 'js-sha256';
/**
 * Validate base 58 address
 */
export function validateAddress(addy:string): boolean {
  // Check length of address
  const result = addy.length < 26 || addy.length > 35 ? false : true;
  // Verify decoded address !null
  if(!result){
    console.error("Invalid address length");
  }
  const decoded = decodeBase58To25(addy);
  if (decoded === null){
    console.error("Invalid address type");
  }
  // Hash decoded element 0-21
  // Hash that hash
  // Check if second hash elements 0-4 match decoded 21, 25
  const hash1 = sha256(decoded.slice(0,21));
  const h1ByteArray = createByteArray(hash1);
  const hash2 = sha256(h1ByteArray);
  const hash2ByteArray = createByteArray(hash2);
  // If address is not valid show error in console
  const output = hash2ByteArray.slice(0,4).toString() === decoded.slice(21,25).toString() ?
  true : false;
  return output;
};