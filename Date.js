// Creating a new Date object representing the current date and time
let currentDate = new Date();

// Displaying the current date and time
console.log("Current Date and Time:", currentDate);

// Creating a Date object for a specific date
let specificDate = new Date("2022-06-01");
let specificDate_1 = new Date("2022/06/01");

// Displaying the specific date
console.log("Specific Date:", specificDate);
console.log("Specific Date_1", specificDate_1);

// Getting individual components of a Date (year, month, day, hour, minute, second)
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Months are zero-based (0 to 11), so add 1
let day = currentDate.getDate();
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let second = currentDate.getSeconds();

// Displaying individual components
console.log(`Components: ${year}-${month}-${day} ${hour}:${minute}:${second}`);

// Formatting a date using toLocaleDateString and toLocaleTimeString
let formattedDate = currentDate.toLocaleDateString();
let formattedTime = currentDate.toLocaleTimeString();

// Displaying formatted date and time
console.log("Formatted Date:", formattedDate);
console.log("Formatted Time:", formattedTime);
