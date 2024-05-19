let name = "JavaScript";

// Get the second character (index 1)
let secondChar = name.charAt(1); // secondChar will be "a"

// Extract a substring from index 4 (inclusive) to 8 (exclusive)
let subStr = name.substring(4, 8); // subStr will be "Script"



let message = "Welcome to the course!";

// Find the index of the first "o"
let oIndex = message.indexOf("o"); // oIndex will be 4

// Check if "course" exists in the message
let hasCourse = message.includes("course"); // hasCourse will be true

// Replace all occurrences of "the" with "an"
let newMessage = message.replace(/the/g, "an"); // newMessage will be "Welcome to an course!"



let greeting = "Hello World";

// Convert to uppercase
let allUpper = greeting.toUpperCase(); // allUpper will be "HELLO WORLD"

// Convert to lowercase
let allLower = greeting.toLowerCase(); // allLower will be "hello world"



let firstName = "Nelly";
let lastName = "Wangari";

// Combine first and last name with a space
let fullName = firstName.concat(" ", lastName); // fullName will be "Nelly wangari"

// Remove leading and trailing spaces
let trimmedMsg = "  Hello  ".trim(); // trimmedMsg will be "Hello"



let colors = "red,green,blue";

// Split the string into an array of colors
let colorArr = colors.split(","); // colorArr will be ["red", "green", "blue"]

// Join the elements of an array with semicolons
let veggies = ["tomato", "onion", "pepper"];
let veggieStr = veggies.join(";"); // veggieStr will be "tomato;onion;pepper"
