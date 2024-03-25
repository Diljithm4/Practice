let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

// Access properties
console.log(person.firstName);
console.log(person['lastName']);

// Modify properties
person.age = 35;

// Add properties
person.email = 'john@example.com';

// Remove properties
delete person.age;

// Iterate over properties
for (let key in person) {
    console.log(key + ': ' + person[key]);
}
