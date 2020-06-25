// create arry using array litarl

let arr = [1,2,3,4,5]  // array with 5 element and length 5
let arr1 = [1,{a:"Hello"},"Vaibhav",]; // array ignores trailling comma
let arr2 = [1,,2] // arry with length 3 and two value

console.log(arr);
console.log(arr1);
console.log(arr2);


// values in array need not be constant they may expression

console.log([1,(1+2)])
console.log([,,,]);


//spread oprator
let User = {
    name:"Vaibhav",
    age:25,
    marks:[10,20,30]
}
console.log([...Object.keys(User)])