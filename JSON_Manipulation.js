// //Parsing JSON
// const jsonString = '{"name": "John", "age": 30}';
// const jsonData = JSON.parse(jsonString);
// console.log(jsonData);

const { useColorScheme } = require("react-native-web");

// //Stringify JSON
// const jsonData = { name: 'John', age: 30 };
// const jsonString = JSON.stringify(jsonData);
// console.log(jsonString);

// //Accessing and Modifying Properties
// const jsonData = { name: 'John', age: 30 };
// console.log(jsonData.age);
// console.log(jsonData.name); // Accessing property
// jsonData.age = 31; // Modifying property
// console.log(jsonData.age);


// //Adding and removing properties 
// const jsonData = { name: 'John', age: 30 };
// jsonData.city = 'New York'; // Adding a new property
// console.log(jsonData);
// delete jsonData.age; // Removing a property
// console.log(jsonData);

// //Itrating over JSON objects
// const jsonData = {"fruit": "Apple", "size": "Large", "color": "Red"}
// for (const key in jsonData) {
//   console.log(key, jsonData[key]);
// }


// //Filtering and transforming arrays of JSON Objects
// const people = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'Bob', age: 35 }
//   ];
//   const adults = people.filter(person => person.age == 30);
//   const names = people.map(person => person.name);

//   for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//   }  

  
// //Nested JSON manipulation
// const nestedJson = {
//     user: {
//       name: 'Alice',
//       address: {
//         city: 'Wonderland',
//         country: 'Fantasy'
//       }
//     }
//   };
//   const city = nestedJson.user.address.city;
//   console.log(useColorScheme);


// //Combining and merging JSON
// const json1 = { name: 'John' };
// const json2 = { age: 30 };
// const mergedJson = { ...json1, ...json2 }; // Merging using the spread operator
