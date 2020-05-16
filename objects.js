/* 1. 
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

console.log(student.courses);
*/

/* 2. 
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
}

console.log(jane.location.country);
*/

/* 3. */
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
fido.age = 5;

// Add property 'favorite food'.
fido['favorite food'] = 'plantains';

/* 4. 
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) {
    console.log(`Hej, ${ name }!`);
  }
};

jane.greet('Bobby'); // Hej, Bobby!
*/

/* 5. 
    Snippet 1 will log { prefix: 'Pacific' }
    Snipped 2 will log { Indian: 'Pacific' }
*/

/* 6. Property keys are strings, so 'true' === true will evaluate to false */

/* 7. 
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);
console.log(keys);
*/

/* 8. 
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

let nestedPerson = []
for (let prop in person) {
  nestedPerson.push([prop, person[prop]]);
}
console.log(nestedPerson);
*/

/* 9. 
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let obj = {};
nestedArray.forEach(keyValue => obj[keyValue[0]] = keyValue[1]);
console.log(obj);
*/

/* 10. */
function clone(obj) {
  let clone = {};
  Object.assign(clone, obj);
  return clone;
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33
