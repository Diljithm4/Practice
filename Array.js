// Creating an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Accessing array elements
console.log("First element:", numbers[0]);      
console.log("Second element:", numbers[1]);     

// Modifying array elements
numbers[2] = 10;
console.log("Modified array:", numbers);         

// Adding elements to the end of the array
numbers.push(6);
console.log("Array after push:", numbers);   

// Removing elements from the end of the array
numbers.pop();
console.log("Array after pop:", numbers);

// Removing elements from the end of the array
let removedElement = numbers.pop();
console.log("Removed element:", removedElement); 
console.log("Array after pop:", numbers);        

// Iterating over array elements using a for loop
console.log("Array elements using for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Iterating over array elements using forEach
console.log("Array elements using forEach:");
numbers.forEach(function(element) {
  console.log(element);
});

