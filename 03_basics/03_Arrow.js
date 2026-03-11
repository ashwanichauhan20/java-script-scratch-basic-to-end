const user = {
    username : "ashwani",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this); // output: {username: 'ashwani', price: 99, welcomeMessage: ƒ}
    }

}

user.welcomeMessage(); // output: ashwani,welcome to website
user.username ="ashwani kumar";
user.welcomeMessage(); // output: ashwani kumar,welcome to website
 console.welcomeMessage(); // output: undefined,welcome to website

// Arrow function does not have its own this keyword, it inherits this from the parent scope. 
// In the above example, if we change welcomeMessage to an arrow function, it will not work as expected.

// browser k ander jo object hota usai window global object kehte hai, aur window object ke ander this keyword hota hai.

function chai(){
    let username = "ashwani";
    console.log(this); // output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    console.log(this.username); // output: undefined    

}


// arrow function does not have its own this keyword, it inherits this from the parent scope.
// arrow function decleration ke ander this keyword ka value window object hota hai, isliye arrow function ke ander this.username undefined hota hai.
// arrow function {} output return krta hai.
const chai = () => {
    let username = "ashwani";
    console.log(this.username); // output: undefined
}

// arrow function is a shorter syntax for function expression, it does not have its own this keyword, it inherits this from the parent scope.
// arrow function is not suitable for methods, because it does not have its own this keyword, it inherits this from the parent scope.
const addTwo = (num1, num2) => { // curly bracket use krne par hume return statement use krna padta hai, otherwise undefined return hota hai.
    return num1 + num2;
}

console.log(addTwo(2, 3)); // output: 5


const addTwo1 = (num1, num2) => num1 + num2; // implicit return. esami hum curly bracket use nahi karte hai, aur return statement bhi nahi use karte hai, isliye implicit return kehte hai.
console.log(addTwo(2, 3)); // output: 5

const addtwo2 = (num1, num2) =>( {username: "ashwani"}); // object return karne ke liye curly bracket use karte hai, lekin is case me hume return statement use karna padta hai, otherwise undefined return hota hai.