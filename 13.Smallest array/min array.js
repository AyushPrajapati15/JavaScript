// program to find the smallest element in an array.
function small(arr) {
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  }
  
  let arr = [1, 5, 2, 4, 3, 8, 9];
  // large(arr);
  console.log(small(arr));
  