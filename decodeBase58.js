const ALPHANUM =
"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

decodeBase58To25Bytes = (input) => {
  let num = BigInt(0);
  let arr = input.split("");
  let charArray = [];
    arr.forEach((char,i) => {
      let p = ALPHANUM.indexOf(char);
      if(p !== -1){
        charArray.push(p);
      }
      num = ((num*(BigInt(58)))+(BigInt(p)));
    });

    let result = Array(25);
    let numBytes = toByteArray(num);

    let i = numBytes.length;
    while(i--) result[i] = numBytes[i];
    /*
       * This array should be 24 or 25 bytes
       * If it is 25, gtg
       * If its 24 remove undefined and insert 0 at the beginning
       *
    */
    if(numBytes.length < 25){
      result.pop();
      result.unshift(0);
    }
      return result;
    }

module.exports = decodeBase58To25Bytes;