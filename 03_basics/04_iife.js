// Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that is defined and immediately executed. It is often used to create a new scope and avoid polluting the global namespace.
(function chai (){
    console.log('DB CONNECTED');
}) (); //semicolon is used to avoid any syntax error, because if we do not use semicolon, then it will be treated as a function declaration, and it will not execute immediately.

//(global scope k pollution se bachne ke liye IIFE ka use kiya jata hai, isse hum apne code ko encapsulate kar sakte hai, aur global scope me unnecessary variables create nahi karte hai. IIFE ke ander jo bhi variable declare kiya jata hai, wo usi scope me rahata hai, aur global scope me accessible nahi hota hai.
// IIFE ke ander jo bhi variable declare kiya jata hai, wo usi scope me rahata hai, aur global scope me accessible nahi hota hai. isliye IIFE ka use karke hum apne code ko encapsulate kar sakte hai, aur global scope me unnecessary variables create nahi karte hai.
//( function decleration )( execution call operator ) is the syntax of IIFE. function decleration ke baad execution call operator () use kiya jata hai, jisse function immediately execute ho jata hai.

// arrow function in form decleration
(() => {
    console.log('DB CONNECTED TWO');
})();


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("ashwani");