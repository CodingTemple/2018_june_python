const cars = [
  {year: 2017, make: "Chevy", model: "Tahoe"},
  {year: 2010, make: "Ford", model: "Fusion"},
  {year: 2002, make: "Chevy", model: "Corvette"},
  {year: 2010, make: "Buick", model: "Regal"},
  {year: 1995, make: "Chevy", model: "Suburban"},
  {year: 1999, make: "GMC", model: "Terrain"}
];

const ages = [12, 54, 73, 66, 23, 66, 11, 9, 18, 26, 22];

// ES5
/* for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
} */

// ES6
/* cars.forEach(car => {
  console.log(car.model);
}); */

/* ------------ filter ------------ */
// ES5
/* let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if(ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
} */
// console.log(canDrink);

// ES6 - not optimized
/* const canDrink = ages.filter(age => {
  if (age >= 21) {
    return true
  }
});
console.log(canDrink); */

// ES6 optimized
const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);


/* ------------ map ------------ */
const carsModel = cars.map(car => car.model);
// console.log(carsModel);

const agesSquared = ages.map(age => Math.sqrt(age));
// console.log(agesSquared);


/* ------------ sort ------------ */
// ES5
/* const sortedCars = cars.sort((a, b) => {
  if (a.year > b.year) {
    return 1;
  }
  else {
    return -1;
  }
});
console.log(sortedCars); */

// ES6
/* const sortedCars = cars.sort((a, b) => (a.year > b.year));
console.log(sortedCars);
 */


// condition ? expr1 : expr2
 const sortedCars = cars.sort((a, b) => (a.year > b.year) ? 1 : -1)


/* ------------ reduce ------------ */
// .reduce(sum, index, starting_point);
const sumAges = ages.reduce((total, age) => total + age, 0);
console.log(sumAges);