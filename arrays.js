/* 1. */
function first(arr) {
  return arr[0];
}

// console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'

/* 2. */
function last(arr) {
  return arr[arr.length - 1];
}

/* 3. */
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.splice(energy.indexOf('fossil'), 1);
energy.push('geothermal');
//console.log(energy);

/* 4. */
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//console.log(alphabet.split(''));

/* 5. */
let scores = [96, 47, 113, 89, 100, 102];
//console.log(scores.filter(num => num >= 100).length);

/* 6. 
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let i = 0; i < vocabulary.length; i++) {
  for (let j = 0; j < vocabulary[i].length; j++) {
    console.log(vocabulary[i][j]);
  }
}
*/

/* 7. Logs 'false'. The arrays have the same elements but don't occupy the same space in memory */

/* 8. Use the Array.isArray() method */

/* 9.
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(string, array) {
  let contained = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === string) {
      contained = true;
      break;
    }
  }
  return contained;
}

console.log(contains('Barcelona', destinations));
console.log(contains('Nashville', destinations));
*/

/* 10. 
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
console.log(passcode.join('-'));
*/

/* 11. */
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
while (groceryList.length > 0) {
  console.log(groceryList.shift());
}
