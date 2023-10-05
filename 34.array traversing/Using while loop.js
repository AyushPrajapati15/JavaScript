const data = [
    { name: 'John', age: 30, group: 'A' },
    { name: 'Mary', age: 25, group: 'B' },
    { name: 'Mike', age: 20, group: 'A' },
    { name: 'Jane', age: 15, group: 'C' },
    { name: 'Peter', age: 25, group: 'B' }
  ];
  

  let len = data.length, count = 0;
  while(len--) {
    console.log(data[count]);
    count++;
}
  

// *************************************************************************
const data1 = [
    { name: 'John', age: 30, group: 'A' },
    { name: 'Mary', age: 25, group: 'B' },
    { name: 'Mike', age: 20, group: 'A' },
    { name: 'Jane', age: 15, group: 'C' },
    { name: 'Peter', age: 25, group: 'B' }
  ];
  
 
  for (let i = 0; i < data1.length; i++) {
    console.log(i);
  }

  data1.forEach(function(item, index) {
    console.log(index);
  });