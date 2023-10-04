// Rotate an array
function rotateArray(arr, steps) {
  if (steps < 0) {
    steps = steps + arr.length;
  }

  steps = steps % arr.length;

  return arr.slice(-steps).concat(arr.slice(0, arr.length - steps));
}

const arr = [1, 2, 3, 4, 5];
console.log(arr);
const steps = 2;
const rotatedArray = rotateArray(arr, steps);

console.log(rotatedArray);
