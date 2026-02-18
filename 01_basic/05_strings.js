const name ="ashwani";
const repocunt=10;
// string is a sequence of characters enclosed in single quotes, double quotes or backticks
// we can use backticks for template literals which allows us to embed expressions inside string using ${} syntax
const greeting = `hello ${name}`; // template literal
console.log(greeting); // hello ashwani

// we can also use string concatenation using + operator
const greeting2 = "hello " + name;
console.log(greeting2); // hello ashwani

// we can also use string interpolation using ${} syntax inside backticks
const greeting3 = `hello my name is  ${name} and my repo count is ${repocunt}`;
console.log(greeting3); // hello ashwani and my repo count is 10

// we can also use string methods to manipulate strings
const str = "hello world";
console.log(str.length); // 11
console.log(str.toUpperCase()); // HELLO WORLD
console.log(str.toLowerCase()); // hello world
console.log(str.includes("world")); // true
console.log(str.indexOf("o")); // 4
console.log(str.slice(0,5)); // hello
console.log(str.replace("world","javascript")); // hello javascript

const gameName =new String("pubg");
//console.log(gameName[0]); // p
//console.log(gameName.length); // 4
// gameName is an object of String class and it has properties and methods of String class but it is not a primitive data type, it is a non primitive data type because it is an object and it is stored in heap memory and reference of that memory is stored in stack memory
// we can use string methods on gameName because it is an object of String class
console.log(gameName.toUpperCase()); // PUBG
console.log(typeof gameName); // object
// but when we use string literal it is a primitive data type and it is stored in stack memory and copy are assigned for primitive data types
const gameName2 = "pubg";
console.log(typeof gameName2); // string
// in above code we have created a string literal gameName2 which is a primitive data type and it is stored in stack memory and copy are assigned for primitive data types, so when we use typeof operator on gameName2 it returns string because it is a primitive data type, but when we use typeof operator on gameName it returns object because it is an object of String class and it is a non primitive data type
console.log(gameName.charAt(3)); // d
console.log(gameName.indexOf("g")); // 2
console.log(gameName.slice(0,3)); // pub
console.log(gameName.replace("pub","call of")); // call of g

