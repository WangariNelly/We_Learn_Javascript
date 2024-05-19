

const fruits = new Set(["apple", "banana", "cherry", "apple"]); // Duplicates are ignored

fruits.add("mango");
console.log(fruits);  // Output: Set({"apple", "banana", "cherry", "mango"})

console.log(fruits.has("orange")); // Output: false

fruits.delete("cherry");
console.log(fruits);  // Output: Set({"apple", "banana", "mango"})