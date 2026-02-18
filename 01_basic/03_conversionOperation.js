//let score="13"
//let score="13as"
//let score=null
let score=undefined

console.log(typeof score);
console.log(typeof (score));

 let valueInNumber=Number(score)
 console.log(typeof valueInNumber);
 console.log(valueInNumber);

 /*
 "13"=> 13 number give exact vale.
 "13as"=> NaN not a number
 null=> 0
 undefined=> NaN
 true=> 1
 false=> 0
 */
let isloggedIn=1
let booleanIsloggedIn=Boolean(isloggedIn)
console.log(booleanIsloggedIn);
/*
0, null, undefined, NaN, "" => false
any other value like ashwani, ram ,2 etc=> true
*/
 let somenumber=43
 let stringNumber=String(somenumber)
 console.log(stringNumber);
 console.log(typeof stringNumber);

//  ***********Operation***********************
let value= 3
let negValue= -value
console.log(negValue);
console.log(typeof negValue);
console.log(3+3);
console.log("3"+"3"); //string concatenation
console.log("3"+3); //string concatenation
console.log(3+"3"); //string concatenation
console.log(3-3);
console.log(3+3+"3"); //first 3+3=>6 then 6+"3"=> "63"
console.log("3"+3+3); //first "3"+3=> "33" then "33"+3=> "333"

console.log(+true);

let num1=num2=num3=3