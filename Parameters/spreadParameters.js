
//spread operator
//expanding iterables in function calls 
function sumAll( a,b,c){
    return a + b + c;
}
const result = [1,2,3];
console.log(sumALl(...result));


//combining arrays
// const students1 = ['Nelly', 'Max'];
// const students2 = ['cliff','James'];
// const students = [...students1,...students2];
// console.log(students);


// //destructuring 
// const students = ['Nelly','Max','Cliff','James','JohnBrian','Hopp'];
// const [args1,args2,...rest] = students;
// console.log(args1);
// console.log(args2);
// console.log(rest);

//copying arrays/objects
const students = ['Nelly','Max','Cliff','James'];
const studentsCopyed =  [...students];
students.push('JohnBrian','Hopp');
console.log(studentsCopyed);
console.log(students);