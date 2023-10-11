// empty an array in JavaScript?
function emptyArray(arr) {
    arr.length = 0;
  }
  
  let arr = [1, 2, 3, 4];
  console.log("Before emptying:", arr);
  
  emptyArray(arr);
  console.log("After emptying:", arr); // Output: []
  