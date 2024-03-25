// Example of an object representing a person
let person = {
    firstName: "Diljith",
    lastName: "M",
    age: 25,
    isStudent: false,
    contact: {
      email: "Diljith@gmail.com",
      phone: "9876764556"
    },
    hobbies: ["reading", "coding", "traveling"],
    sayHello: function() {
      console.log("Hello, I'm " + this.firstName + "!");
    }
  };
  
  // Accessing object properties
  console.log("First Name:", person.firstName); 
  console.log("Age:", person.age);        
  
  // Accessing nested properties
  console.log("Email:", person.contact.email); 
  
  // Accessing array elements within the object
  console.log("Hobbies:", person.hobbies); 
  
  // Calling a method from the object
  person.sayHello();
  