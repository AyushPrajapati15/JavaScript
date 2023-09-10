// Bubble Sort
function sort(arr) {
    let temp = 0;
    let swapped;

    for (let i = 0; i < arr.length - 1; i++){
        swapped = false;
        for (let j = 0; j < arr.length - 1 - i; j++){
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr;
    
}


let arr = [5, 4, 6, 8, 2, 9, 3, 7];
let sorted = sort(arr);
console.log(sorted);
