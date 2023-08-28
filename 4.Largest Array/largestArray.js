// program to find the largest element in an array.
function large(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
    

let arr = [1, 5, 2, 4, 3, 8, 9]
// large(arr);
console.log(large(arr));
