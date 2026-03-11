var c = 300
// curley bracket k bahar jo hota h wo global scope me hota h, iska matlab hai ki c variable globally accessible hai, iska value 300 hai 
// jo globel scope me hota h wo har jagah accessible hota h, iska matlab hai ki c variable globally accessible hai, yai curly bracket ka ander bhe ho sakta hai aur bahar bhi, iska matlab hai ki c variable globally accessible hai



if (true) { // jo if block ke andar hota h wo block level scope me hota h, iska matlab hai ki a,b,c sirf is block ke andar hi accessible hai, iske bahar nahi

let a= 10
const b = 20
var c = 30
}

//{} jb yai function,else k sath use hota hai to uska scope block level hota hai, iska matlab hai ki a,b,c sirf is block ke andar hi accessible hai, iske bahar nahi

console.log(a); // Output: 10
console.log(b); // Output: 20
console.log(c); // Output: 30


function one (){
    const username = "ashwani"
    function two(){
        const website ="youtube"
        console.log(username); // Output: ashwani (function two can access username variable from function one because of closure)
    }
   //  console.log(website); // Output: ReferenceError: website is not defined (function one cannot access website variable from function two because it is not in the same scope  
    
    //   two(); // Output: ashwani (function two is called inside function one, so it can access username variable from function one because of closure)

}
one(); // Output: ashwani (function one is called, which in turn calls function two, so it can access username variable from function one because of closure)



if (true) {
    const username = "ashwani"
    if (username=== "ashwani") {
        const website = " youtube"
        console.log(username + website); // Output: ashwani youtube  (inner if block can access username variable from outer if block because of closure)
    }
    console.log(website); // Output: ReferenceError: website is not defined (outer if block cannot access website variable from inner if block because it is not in the same scope)

}
console.log(username)  // Output: ReferenceError: username is not defined (username variable is not accessible outside the if block because it is in block scope)



// +++++++++++++++++ function decelaration from various ways ++++++++++++++++++++++++

console.log(addOne(5)); // output dega kyo ki function decelaration ho chuka hai, function declaration is hoisted, iska matlab hai ki function declaration ko JavaScript engine pehle se hi memory me store kar leta hai, isliye hum function declaration ko call kar sakte hai uske pehle bhi
function addOne(num){
    return num+1
}
addOne(5)


//  addTwo(5) // output nhi dega kyo ki deceleration k sath function expression use kiya gaya hai, function expression is not hoisted, iska matlab hai ki function expression ko JavaScript engine pehle se hi memory me store nahi karta hai, isliye hum function expression ko call nahi kar sakte hai uske pehle
const addTwo = function(num){
    return num + 2
}
addTwo(5)