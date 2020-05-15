/* 1. 
console.log("These aren't the droids you're looking for.".length);
*/

/* 2.
function repeat(times, string) {
  let newString = '';
  for (let i = 0; i < times; i += 1) {
    newString += string;
  }
  return newString;
}

console.log(repeat(3, 'ha'));
*/

/* 3. 
let rhyme = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'
console.log(rhyme);
*/

/* 4. 
Change both strings to uppercase or lowercase then compare
*/

/* 5. 
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
console.log(byteSequence.includes('x'));
*/

/* 6.
function isBlank(string) {
  if (string.length === 0) {
    return true;
  } else { 
    return false;
  }
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true
*/

/* 7.
function isBlank(string) {
  if (string.trim().length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true
*/

/* 8. 
let string = 'launch school tech & talk';
console.log(string.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' '));
*/

/* 9. */
