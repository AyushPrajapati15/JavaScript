// Remove Duplicates Using Set() Constructorx
var unique = new Set();
unique.add(1);
unique.add(2);
unique.add(2);
unique.add(1);
unique.add(3);

for (let item of unique) {
  console.log(item);
}



// Using Set() Constructor
var arr = [1, 2, 1, 4, 3, 3, 1, 2, 4];

// create a set from array
var unique = new Set(arr);

// convert set to array
var uniqueArray = Array.from(unique);

console.log(uniqueArray); // [1, 2, 4, 3]