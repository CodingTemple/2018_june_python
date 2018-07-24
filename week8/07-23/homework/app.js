var consec = [1, 2, 3, 4, 5]
var notConsec = [1, 4, 3, 2, 1]
var isConsecutive;

function isConsec(arr) {
  var num = arr[0];

  for (var i = 1; i < arr.length - 1; i++) {
    var firstNum = arr[i];
    var secNum = arr[i + 1];
    if (secNum !== (firstNum + 1)) {
      isConsecutive = false;
    }
    else
    {
      isConsecutive = true;
    }
  }
  return isConsecutive;
}
console.log(isConsec(consec));

