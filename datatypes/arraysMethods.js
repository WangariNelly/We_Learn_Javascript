// Create an array of fruits
let fruits = ["apple", "banana", "orange", "mango", "kiwi"];

// **Extracting elements:**

// Get the first fruit
let firstFruit = fruits[0]; // firstFruit will be "apple"

// Get the last fruit using array length and subtraction
let lastFruit = fruits[fruits.length - 1]; // lastFruit will be "kiwi"

// **Searching and manipulation:**

// Find the index of "orange"
let orangeIndex = fruits.indexOf("orange"); // orangeIndex will be 2

// Check if "grape" exists in the array (will return -1 if not found)
let hasGrape = fruits.indexOf("grape"); // hasGrape will be -1

// Remove the first element (apple) using shift
let removedFruit = fruits.shift(); // removedFruit will be "apple"
console.log(fruits); // Now fruits will be ["banana", "orange", "mango", "kiwi"]

// Add a new fruit ("pineapple") to the end using push
fruits.push("pineapple");
console.log(fruits); // Now fruits will be ["banana", "orange", "mango", "kiwi", "pineapple"]

// **Iteration:**

// Loop through each fruit and print it to the console
for (let fruit of fruits) {
  console.log(fruit);
}

// **Transformation:**

// Create a new array with all fruits in uppercase using map
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // Now upperFruits will be ["BANANA", "ORANGE", "MANGO", "KIWI", "PINEAPPLE"]

// Filter fruits starting with "m"
let mFruits = fruits.filter(fruit => fruit.charAt(0) === "m");
console.log(mFruits); // Now mFruits will be ["mango"]

// **Combining arrays:**

// Create a new array with favoriteFruits
let favoriteFruits = ["watermelon", "strawberry"];

// Combine fruits and favoriteFruits using concat (doesn't modify original arrays)
let allFruits = fruits.concat(favoriteFruits); 
console.log(allFruits); // Now allFruits will be ["banana", "orange", "mango", "kiwi", "pineapple", "watermelon", "strawberry"]

// **Sorting (modifies the original array)**
fruits.sort(); // Sorts fruits alphabetically
console.log(fruits); // Now fruits will be ["banana", "kiwi", "mango", "orange", "pineapple"] 
