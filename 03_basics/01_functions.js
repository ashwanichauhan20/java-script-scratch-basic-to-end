// function is a reusable block of code that performs a specific task
// it can take input, process it, and return an output

// function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// function expression
const add = function(a, b) {
    return a + b;
};

// arrow function
const multiply = (a, b) => a * b;

// calling the functions
console.log(greet('Alice')); // Output: Hello, Alice!
console.log(add(5, 3)); // Output: 8
console.log(multiply(4, 6)); // Output: 24

// functions can also have default parameters
function sayHello(name = 'World') {
    return `Hello, ${name}!`;
}

console.log(sayHello()); // Output: Hello, World!
console.log(sayHello('Bob')); // Output: Hello, Bob!

// functions can also be nested
function outerFunction() {
    function innerFunction() {
        return 'I am the inner function!';
    }
    return innerFunction();
}

console.log(outerFunction()); // Output: I am the inner function!



function sayMyName() {
    console.log("My name is John Doe");
    console.log("I am a software developer");
    console.log("I love coding");
}
console.log(sayMyName()); // Output: My name is John Doe

function addTwoNumber(num1, num2) // num1 and num2 are parameters
{
    console.log(num1 + num2);
}
//addTwoNumber(a,b);// it is an argument call
 addTwoNumber(5, 10); // Output: 15
 addTwoNumber(20,"20"); // Output: 2020 (string concatenation)
 addTwoNumber(7,null); // Output: NaN (num2 is undefined)
 addTwoNumber(15, "abc"); // Output: 15abc (string concatenation). it converts num1 to string and concatenates it with "abc".


 function addTwoNumber(num1, num2) {
    let result = num1 + num2;
    return result; // return the result of the addition
}
const result = addTwoNumber(5, 10); // Output: 15
console.log("result",result); // Output: result 15
 

function loginUserMessage(username) {
    return `${username} has logged in successfully!`;

}
console.log(loginUserMessage("ashwani")); // Output: ashwani has logged in successfully!
console.log(loginUserMessage()); // jb hum kuch argument pass nahi karte to undefined aata hai, Output: undefined has logged in successfully!

function loginUserMessage(username ) {
    if (username === undefined) {
        console.log("please enter username");
        return; // return statement is used to exit the function early
    }
    return `${username} has logged in successfully!`;   

}
console.log(loginUserMessage("ashwani")); // Output: ashwani has logged in successfully!
console.log(loginUserMessage()); // Output: please enter username

function calculateCartPrice(val1,val2,val3,...num1) // eg calculateCartPrice(100, 200, 300, 400, 500) // Output: [400, 500] (rest parameter collects all arguments after the first three into an array) val1,val2,val3 mai assigne krne k baad jo value aayegi wo num1 me collect ho jayegi as an array, rest parameter is used to collect all remaining arguments into an array
// function calculateCartPrice{...num1}  // 3dot is also know as rest operator and spread operator ,eska kaam  hota h ki bahut se value ko ek array me collect karna, rest parameter is used to collect all remaining arguments into an array
 {
    return num1
}
console.log(calculateCartPrice(100, 200, 300)); // Output: [100, 200, 300] (rest parameter collects all arguments into an array) eg calculateCartPrice(100, 200, 300, 400) // Output: [100, 200, 300, 400] (rest parameter collects all arguments into an array)



const myNewArray =[200,400,100,500];
function returnSecondValue(getArray){
    return getArray[1]; // getArray[1] will return the second value of the array
}
console.log(returnSecondValue(myNewArray)); // Output: 400 (the second value of the array is 400)
console.log(returnSecondValue([10, 20, 30, 40])); // Output: 20 (the second value of the array is 20)