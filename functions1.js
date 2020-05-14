/* 1.  
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 2));
*/

/* 2.

function brendanEichQuote() {
  console.log('Always bet on JavaScript.');
  // return value is undefined
}

brendanEichQuote();
*/

/* 3.

function cite(author, quote) {
  console.log(`${ author } said: ${ quote }`);
}

cite('Brendan Eich', 'Always bet on JavaScript.');
*/

/* 4.

function squaredNumber(num) {
  return num * num;
}

console.log(squaredNumber(3));
*/

/* 5.
  Won't output anything since method isn't called.

  Will output this if using multipleOfThree() instead:
  3 / 1 = 3
  6 / 2 = 3
  9 / 3 = 3
  12 / 4 = 3
  15 / 5 = 3
  18 / 6 = 3
  21 / 7 = 3
  24 / 8 = 3
  27 / 9 = 3
  30 / 10 = 3
*/

/* 6

function compareByLength(string1, string2) {
  if (string1.length < string2.length) {
    console.log(-1);
  } else if (string1.length > string2.length) {
    console.log(1);
  } else {
    console.log(0);
  }
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0
*/

/* 7.
let string = 'Captain Ruby';

console.log(string.replace('Ruby', 'Javascript'));
console.log(string.split(' ')[0] + ' Javascript');
*/

/* 8. */

function greet(languageCode) {
  switch (languageCode) {
    case 'en':
      return 'Hi!';
      break;
    case 'fr':
      return 'Salut!';
      break;
    case 'pt':
      return 'Ola!';
      break;
    case 'de':
      return 'Hallo!';
      break;
    default:
      return 'Sup!';
      break;
  }
}

/* 9. */
function extractLanguage(locale) {
  return locale.split('_')[0];
}

/* 10 */
function extractRegion(locale) {
  // splits on '.' or '|', returns 2nd element
  return locale.split(/[.|_]/)[1];
}

/* 11 */
function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US':
      return 'Hey!';
      break;
    case 'GB':
      return 'Hello!';
      break;
    case 'AU':
      return 'Howdy!';
      break;
    default:
      return greet(language);
      break;
  }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'

console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'

