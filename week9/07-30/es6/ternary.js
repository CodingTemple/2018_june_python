/* ------------ filter ------------ */
// condition ? expr1 : expr2

/* let i = 1;
while (i < 21) {
  console.log(i%2===0 ? `${i}: divisible by 2` : `${i} not divisible by 2`);
  i++;
} */

let needHaircut = true;
let goToBarber = needHaircut ? 'Go to the barber shop!' : 'Your hair is already cut!';
// console.log(goToBarber);


const hello = () => console.log("Hello!");
const goodbye = () => console.log("Goodbye!");
let greetNieghbor = true;
// greetNieghbor ? hello() : goodbye();


let age = 41;
const legalAge = age > 20 ? 'You are fully legal' : (age > 16 && age < 21 ? "You are legal, but not all the way legal" : "You're a young tadpole");
console.log(legalAge);