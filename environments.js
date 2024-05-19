/*
*@summary [[Environment]]
*/
let length = 30; // @global Env
//@ regular expression
function calculateArea(){
  return length * 10
};
console.log(calculateArea()) //output 300
/*using 'new' Keyword
*@summary creates a new function 
*global object reference
*/
let calculateSum = new Function("return length + 10;");
console.log(calculateSum()); //ReferenceError: length is not defined
 //pass as arg to access 'length'
 let calculateSum2 = new Function("length", "return length + 10;");
 console.log(calculateSum2(30)); // output 40

