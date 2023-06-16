// property and value pairs
const car = {
    type:"Fiat",
    model:"500",
    color:"white"
};

const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
    fullName: function() {
        return this.firstname + " "+ lastName; 
    }
};

// accessing values..
console.log(person.firtName);
console.log(person["firstName"]);
console.log(person.fullName());