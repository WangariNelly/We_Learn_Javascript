//nested function
function weCode(name){
    function getName(){
        //local variable
        const message = " is fun!";
        return name + message;
    }
    console.log(getName());
}
weCode("Javascript");
console.log(getName()); //reference error