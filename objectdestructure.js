let User = {
    name:"vaibhav",
    age :25,
    address:{
        zipCode:411046
    }
}
/**
console.log(User);
let {name , age , address} = User;
console.log(name);
console.log(age);
console.log(address);
*/
console.log(User);
let {name , age , address:{ zipCode }} = User;
console.log(name);
console.log(age);
console.log(zipCode);