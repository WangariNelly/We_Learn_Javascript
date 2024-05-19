//in arrays 
const person = ["Nelly", 30,"Nairobi"];
const [name,age,city] = person;

//in objects
const person1 = {
    newName: "Nelly",
    newAge: 25,
    newCity: "Nairobi"
};

const {newName,newAge,newCity} = person1

//nested destructuring
const customer = {
    name1: "Nelly",
    address: {
      street: "Haven street",
      city1: "Kisumu"
    }
  };
  
  const { name1, address: { city1 } } = customer;
  console.log(name1); // Output: "Nelly"
  console.log(city1); // Output: "Kisumu"