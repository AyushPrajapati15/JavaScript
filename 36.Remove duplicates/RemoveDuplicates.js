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

var unique = new Set(arr);

var uniqueArray = Array.from(unique);

console.log(uniqueArray);