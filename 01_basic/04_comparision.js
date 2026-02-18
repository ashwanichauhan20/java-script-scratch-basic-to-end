console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

let num1=3
let num2="3"
console.log(num1==num2); //true because of type coercion
console.log(num1===num2); //false because of strict equality operator
console.log(num1!=num2); //false because of type coercion
console.log(num1!==num2); //true because of strict equality operator    
console.log("2"==2); //true because of type coercion
console.log("2"===2); //false because of strict equality operator   
console.log("2">2); //false because of type coercion same dattype value are use for comparison

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true because of type coercion null is converted to 0 for comparison

console.log(undefined>0); //false
console.log(undefined==0); //false
console.log(undefined>=0); //false because of type coercion undefined is converted to NaN for comparison and any comparison with NaN returns false
//===> strict equality operator
console.log("2"===2); //false because of strict equality operator