/* 1-2
function greet(greeting = 'Hello', recipient = 'world') {
  console.log(`${ greeting }, ${ recipient }!`);
}
*/

/* 3.
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  return `${ greeting() }, ${ recipient() }!`;
}

console.log(greet());
*/

/* 4. 
function calculateBMI(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  bmi = weightInKilograms / heightInMeters**2;
  return bmi.toFixed(2);
}

console.log(calculateBMI(180, 80));
*/

/* 5 
function catAge(humanYears) {
  switch (humanYears) {
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}

console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));
*/

/* 6.
function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}

console.log(removeLastChar('ciao!'));
*/

/* 7.
const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);

console.log(sentence('like', 'birds'));
*/

/* 8. */
let initGame = () => ({ level: 1, score: 0 });

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);
