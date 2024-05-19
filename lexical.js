
//closures
function outerFunction() {
    let outerVar = "I am outer";
  
    function innerFunction() {
      console.log(outerVar); // Accesses outerVar from the outer scope
    }
  
    return innerFunction; // Return the inner function (closure)
  }
  
  const innerFunc = outerFunction();
  outerFunction(); // outerFunction finishes execution
  innerFunc(); // Output: "I am outer" (inner function still remembers outerVar)
  