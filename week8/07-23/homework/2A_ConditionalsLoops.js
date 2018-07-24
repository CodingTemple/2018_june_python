// 1. Write a JavaScript function that accept two integers and display the larger.
function larger(a, b) {
  if(b>a) {
    console.log(b);
  }
  else {
    console.log(a);
  }
}
larger(45, 54);


// 2. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
numTwoList = [1, 54, 2];

function sortList(newList) {
  newList.sort((a, b) => {
    return a-b;
  });
  console.log(newList);
}
sortList(numTwoList);


// 3. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
console.log(Math.max(1, 54, 2, 745, 2));

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
i = 1;
while(i<16) {
  if(i%2==0) {
    console.log(`${i}: even`);
  } else {
    console.log(`${i}: odd`);
  }
  i++;
}

// 5. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
i = 1;
while(i<101) {
  if(i%5==0 && i%3==0) {
    console.log(`${i}: FizzBuzz`);
  } else if(i%3==0) {
    console.log(`${i}: Fizz`);
  } else if(i%5==0) {
    console.log(`${i}: Buzz`);
  }
  i++;
}


// 6. Write a function to count how many numbers between 1 and 1000 are divisible by 3 with no remainder.
function divisible() {
  tempList = [];
  i = 1;
  while(i<1001) {
    if(i%3==0) {
      tempList.push(i);
    }
    i++
  }
  return console.log(`There are ${tempList.length} numbers between 1 and 1000 which are evenly divisible by 3.`);
}

divisible();


// 7. Write a function that creates the following output on the console:
/*
    1
   121
  12321
 1234321
123454321
*/
function numberPyramid() {
  // Outer 'for' loop handles the creation of the pyramid
  for(var i = 1; i < 6; i++){
    var local = "";
    // first 'for' loop starts out at 4 spaces and decreases by 1 for every iteration
    // hence, creating the 'pyramid look'
    for(var y = 5; y > i; y--){
      local = local.concat(" ");
    }
    // second 'for' loop handles incremented numbering of the pyramid
    for(var j = 1; j <= i; j++){
      local = local.concat(j);
    }
    // third 'for' loop handles the decrementing of the numbers
    for(var k = i-1; k > 0; k--){
      local = local.concat(k);
    }
    console.log(local);
  }
}
numberPyramid();


// 8. Write a function that creates the following output on the console:
/* 
        1
       121
      12321
     1234321
    123454321
     1234321
      12321
       121
        1
*/
function diamond() {
  for(var i = 1; i < 6; i++){
    var local = "";
    for(var y = 5; y > i; y--){
      local = local.concat(" ");
    }
    for(var j = 1; j <= i; j++){
      local = local.concat(j);
    }
    for(var k = i-1; k > 0; k--){
      local = local.concat(k);
    }
    console.log(local);
  }
  for(var i = 4; i > 0; i--){
    var local = "";
    for(var y = 5; y > i; y--){
      local = local.concat(" ");
    }
    for(var j = 1; j <= i; j++){
      local = local.concat(j);
    }
    for(var k = i-1; k > 0; k--){
      local = local.concat(k);
    }
    console.log(local);
  }
}

diamond();