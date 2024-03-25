//Find
const find_numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find((num) => num > 2);
console.log(foundNumber); 

//Find Index
const findIndex_numbers = [1, 2, 3, 4, 5];
const index = numbers.findIndex((num) => num === 4);
console.log(index); 

//Filter
const filter_numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter((num) => num % 2 === 0);
console.log(filteredNumbers);

//forEach
const colors = ['red', 'green', 'blue'];
colors.forEach((color) => {
  console.log(color);
});

//Join
const Join_fruits = ['apple', 'banana', 'orange'];
const fruitsString = fruits.join(', ');
console.log(fruitsString);

//Map
const Map_numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(squaredNumbers);

//Push
const Push_fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); 

//Pop
const pop_fruits = ['apple', 'banana', 'orange'];
const removedFruit = fruits.pop();
console.log(removedFruit);
console.log(fruits);


//sort
const sort_fruits = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits);

//slice
const slice_numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers);

//splice
const splice_numbers = [1, 2, 3, 4, 5];
const removedElements = numbers.splice(2, 2);
console.log(removedElements);
console.log(numbers);

//shift
const shift_fruits = ['apple', 'banana', 'orange'];
const shiftedFruit = fruits.shift();
console.log(shiftedFruit);
console.log(fruits);

//unshift
const unshift_fruits = ['banana', 'orange'];
fruits.unshift('apple');
console.log(fruits);

