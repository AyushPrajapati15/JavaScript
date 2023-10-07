// Loop Through Array Of Objects And Delete Filter
const data = [
    { name: 'John', age: 30, group: 'A' },
    { name: 'Mary', age: 25, group: 'B' },
    { name: 'Mike', age: 20, group: 'A' },
    { name: 'Jane', age: 15, group: 'C' },
    { name: 'Peter', age: 25, group: 'B' }
  ];
  
  
  const filteredData = data.filter(function(item) {
    return item.age > 20;
  });
  
  console.log(filteredData);