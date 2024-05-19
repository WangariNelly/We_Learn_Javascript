//json string representation of input value.
const person = {
    name: "Nelly",
    age: 25,
    city: "Nairobi"
};
const jsonString = JSON.stringify(person);
console.log(jsonString)

//parse

const jsonString1 = '{"name":"Nelly","age":25,"city":"Nairobi"}';
const person1 = JSON.parse(jsonString1);
console.log(person1);