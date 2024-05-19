
//Rest parameters.
function sumAll(...numbers){
    return numbers.reduce((total,number) => total + number, 0);
}
//invoke the function
const result = sumAll(1,2,3,4,5);
console.log(result);