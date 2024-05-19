function Dog(breed) {
    this.breed = breed;
  }
  // Method defined inthe prototype function.
  Dog.prototype.bark = function() {
    console.log("The " + this.breed+ " is barking!");
  };
  
  const myDog = new Dog("German Shepherd");
  myDog.bark(); 
  