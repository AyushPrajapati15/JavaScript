// function findCommonElements(arr1, arr2) {
//     const commonElements = [];
  
//     for (let element of arr1) {
//       if (arr2.includes(element) && !commonElements.includes(element)) {
//         commonElements.push(element);
//       }
//     }
  
//     return commonElements;
//   }
  
//   // Example usage:
//   const array1 = [1, 2, 3, 4, 5];
//   const array2 = [3, 4, 5, 6, 7];
//   const common = findCommonElements(array1, array2);
//   console.log(common); // Outputs: [3, 4, 5]
  

// Other method
function findCommonElements(arr1, arr2) {
    const commonElements = [];
  
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j] && !commonElements.includes(arr1[i])) {
          commonElements.push(arr1[i]);
        }
      }
    }
  
    return commonElements;
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  const common = findCommonElements(array1, array2);
  console.log(common); // Outputs: [3, 4, 5]
  