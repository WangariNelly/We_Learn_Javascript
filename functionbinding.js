const person = { 
  name: "Nelly",
  hobbies: "Coding"
 }; // 
function sayHi() {
    console.log("Hello, I'm " + this.name + ", i love " + this.hobbies);
  }

// We tell the function that "this" should always be "person"
const greetPerson = sayHi.bind(person);

// Now the function remembers name Nelly and Coding
greetPerson("John", "Swimming");
