const personMap = new Map();
personMap.set("name", "Nelly");
personMap.set(30, "age"); // Numbers can be keys
personMap.set({city: "Nairobi"}, "address"); // Objects can be keys

console.log(personMap.get("name"));  // Output: "Nelly"
console.log(personMap.get(30));       // Output: "age"
console.log(personMap.size);          // Output: 3 (number of key-value pairs)

personMap.delete("name");
console.log(personMap.has("name")); // Output: false