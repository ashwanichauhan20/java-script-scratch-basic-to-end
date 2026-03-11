// object literals 
const mySym = Symbol("key1") // it will create a symbol with the description key1 and assign it to the variable mySym
const JsUser = {
    name: "Ashwani Kumar",
    "full name": "Ashwani Kumar chauhan",
    email: "ashwani@example.com",
    mySym: mySym, // it will create a property with the key mySym and value mySym in the JsUser object literal
    age: 30,
    isAdmin: true,
    isloggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],

}
 console.log(JsUser) // it will give the object literal JsUser with all the properties and values of the object literal
 console.log(JsUser.name) // it will give the value of the name property of the JsUser object literal eg: Ashwani Kumar
 console.log(JsUser.email) // it will give the value of the email property of the JsUser object literal eg: ashwani@example.com
 console.log(JsUser["email"]) // it will give the value of the email property of the JsUser object literal eg: ashwani@example.com
 console.log(JsUser["full name"] ) // it will give the value of the full name property of the JsUser object literal eg: Ashwani Kumar chauhan
 console.log(JsUser.mySym) // it will give the value of the mySym property of the JsUser object literal eg: Symbol(key1)
 console.log(typeof JsUser.mySym)
  
 //ek symbol ko as a key use karna hai to usko square bracket me likhna padega otherwise wo symbol as a string ke roop me treat karega
 console.log(JsUser[mySym]) // it will give the value of the mySym property of the JsUser object literal eg: Symbol(key1)
 console.log(typeof JsUser[mySym])  // it will give the type of the value of the mySym property of the JsUser object literal eg: symbol

 //value change karna hai to usko dot notation ya square bracket notation me likhna padega jise ki JsUser.age = 31 ya JsUser["age"] = 31
 JsUser.age = 31
 console.log(JsUser.age) // it will give the updated value of the age property of the JsUser object literal eg: 31

 
 JsUser.email = "ashwaniupdated@example.com"
 console.log(JsUser.email) // it will give the updated value of the email property of the JsUser object literal eg:

// Object.freeze(JsUser) // it will freeze the JsUser object literal which means that we cannot change any property of the JsUser object literal after freezing it
  JsUser.email = "ashwaniupdated2@example.com" // this will not update the email property because the JsUser object literal is frozen
  console.log(JsUser.email) // it will give the original value of the email property of the JsUser object literal eg: ashwaniupdated@example.com
  

  console.log(JsUser); 

  JsUser.grreeting = function() // it will add a new property greeting to the JsUser object literal which is a function that will return a greeting message

  {
console.log("hello JS user");
  } 
  console.log(JsUser.grreeting); // yai ek 