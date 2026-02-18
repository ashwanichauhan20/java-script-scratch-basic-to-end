// primitive data types
// 7 types: string, number, boolean, null, undefined, symbol, bigint

const score =100
const scorevalue =12.33
const isloggedIn = false
const outsideTemp = null
let userEmail;
const id=Symbol(1,2,3);
const anotherId=Symbol(1,2,3);

const bigint=123432211245677544445n;
// bigint are used for high max number 



//refrence data types or non primitive data types
// object, array, function
// array is a type of object 
// javascript is a dynamically typed language=> we dont have to specify data type of variable at the time of declaration
// we can change the data type of variable at runtime

const heros =["shaktiman","doga","naagraj"];
let myobj={
    name :"ashwani",
    Age :22,
}
//= sign not used in curleybracket for assigne value
const  myFunction =function(){
      console.log("hello world");
}
console.log(typeof isloggedIn);
//isloggedIn is a boolean data type it gives us boolean value true or false
console.log(typeof myFunction);

console.log(typeof outsideTemp);
//outsideTemp=33;
//outsideTemp is a null data type it gives us null value but we can change it to number data type at runtime because javascript is a dynamically typed language

//https://262.ecma-international.org/5.1/#sec-11.4
// for documentation of data types in javascript

// type of value                     result
// undefined                        "undefined"
// null                             "object"
// boolean                           "boolean"
// number                            "number"
// string                            "string"
// symbol                            "symbol"
// bigint                            "bigint"
// function                          "function"
// object (including array and null)  "object"  
