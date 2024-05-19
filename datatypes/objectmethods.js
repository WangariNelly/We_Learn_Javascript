// object.keys
const person = {
    name: "Nelly",
    age: 25,
    city: "Nairobi"
};

//access keys using the object.keys() method.
const keys = Object.keys(person);
console.log(keys); //we get an array of all keys.

//object.values
const user = {
    name: "Nelly",
    age: 25,
    city: "Nairobi"
};

//access values using the object.values() method.
const values = Object.values(user);
console.log(values); //we get an array of all values.


//object.entries
const user1 = {
    name: "Nelly",
    age: 25,
    city: "Nairobi"
};

//access key-value pairs using the object.values() method.
const entries = Object.entries(user1);
console.log(entries); //we get an array of all key-values pairs

