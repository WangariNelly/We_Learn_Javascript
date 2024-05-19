 //set timeout

 function greet(){
    console.log("Hello World!");
  }
  //out of the function scope
  console.log("My name is Nelly");
  //method
  setTimeout(greet, 2000);
console.log("Javascript is Fun");