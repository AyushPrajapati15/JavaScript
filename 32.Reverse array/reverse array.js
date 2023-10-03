function reverseArray(arr) {
    const length = arr.length;
    const middle = Math.floor(length / 2);
  
    for (let i = 0; i < middle; i++) {
      const temp = arr[i];
      arr[i] = arr[length - 1 - i];
      arr[length - 1 - i] = temp;
    }
  
    return arr;
  }
  
  const arr = [1, 2, 3, 4, 5];
  reverseArray(arr);
  console.log(arr);
  