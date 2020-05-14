/*
// 1.

let i;

for (i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 2.

let i;

for (i = 10; i >= 1; i -= 1) {
  console.log(i);
}

// 3.

let greeting = 'Aloha!';

for (let i = 0; i <= 2; i++) {
  console.log(greeting);
}

// 4.

for (let i = 1; i <= 100; i++) {
  console.log(i*2);
}

// 5.

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index++;
}

// 6.

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let index = 0; index < cities.length; index++) {
  if (cities[index] === null) {
    continue;
  }

  console.log(cities[index].length);
}

// 7.

let i;

for (i = 0; i < 1; i += 1) {
  console.log("and on");
}

// 8.

let i = 1;

while (i <= 40) {
  console.log(i);
  i += 2;
}

// 9.

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let index = 0; index < fish.length; index += 1) {
  console.log(fish[index]);
  if (fish[index] === 'Nemo') {
    break;
  }
}
*/

// 10.

// The 1st loop won't run even once, since it doesn't meet the condition. The 2nd will run because it executes once first, then checks the condition on subsequent iterations.
