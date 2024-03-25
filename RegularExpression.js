// Creating a regular expression to match the word 'apple'
let pattern = /apple/;

// Test if the string contains 'apple'
let text1 = "I love apples.";
let text2 = "Bananas are great.";
console.log("Test 1:", pattern.test(text1));
console.log("Test 2:", pattern.test(text2)); 

// Creating a regular expression to match one or more digits
let digitPattern = /\d+/;

let phoneNumber = "Phone: 123-456-7890";
let noDigits = "No digits here.";

console.log("Digits in phone number:", digitPattern.test(phoneNumber)); 
console.log("Digits in text:", digitPattern.test(noDigits));            

// Extracting all email addresses from a text
let emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

let emailText = "Contact us at info@example.com or support@company.com.";

let matches = emailText.match(emailPattern);
console.log("Email Addresses:", matches); 
