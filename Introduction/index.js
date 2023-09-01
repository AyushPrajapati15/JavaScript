// console.log("Hello world");
// // alert("me");
// // document.write("This is document write")
// console.warn("This is warning");
// console.error("This is an error");

// var num1 = 10;
// var num2 = 20;
// console.log(num1 + num2);

// var marks = {
//   alice: 34,
//   bob: 66,
// };

// console.log(marks);

// // primitive data type: undefined,null,number,string,symbol,boolean
// // reference datatypes: array and objects
// var arr = [1, 2, 3, "alice", 5];
// console.log(arr);
// console.log(arr[0]);

// // logical operator
// console.log(true && true);
// console.log(true && false);
// console.log(true || true);
// console.log(true || false);
// console.log(!true);
// console.log(!false);

// function avg(a, b) {
//   return (a + b) / 2;
// }
// console.log(avg(5, 4));

// // for-each
// let a = [1, 2, 3, 4, 5, 6, 7];
// a.forEach(function (element) {
//   console.log(element);
// });

// // Date()

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getHours());

// part 2

// Dom manupulation Document object module

let elem = document.getElementById("click");
console.log(elem);
let elemClass = document.getElementsByClassName("container");
console.log(elemClass);

function clicked() {
  console.log("The button was clicked0");
}
window.onload = function () {
  console.log("The document was loaded");
};
firstContainer = addEventListener("click", function () {
  console.log("Clicked");
});
firstContainer = addEventListener("onmouseover", function () {
  console.log("Clicked");
});
