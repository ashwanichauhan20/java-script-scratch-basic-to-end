// arrays is a data structure that can hold more than one value at a time. It is a collection of elements that are stored in a contiguous block of memory and can be accessed using an index. In JavaScript, arrays are dynamic, meaning they can grow and shrink in size as needed. They can hold any type of data, including numbers, strings, objects, and even other arrays. Arrays are commonly used to store lists of data and to perform various operations on that data, such as sorting, filtering, and iterating through the elements.
// it is resizable and it can hold any type of data and it is ordered and it is indexed and it is mutable and it is a reference type and it is a built-in object in JavaScript.
//it is denoted by square brackets [] and the elements of the array are separated by commas. The resulting variable will contain the array with the specified elements.
// javascript arrays copy operation create shallow copy and it is a reference type so when we copy an array it creates a new reference to the same array in memory and when we modify the copied array it also modifies the original array because both the original and copied arrays are pointing to the same array in memory. To create a deep copy of an array we can use the spread operator or the slice method or the Array.from() method or the JSON.parse() and JSON.stringify() method.
//javascript arrays are zero indexed, meaning the first element of the array is at index 0, the second element is at index 1, and so on. This means that if we want to access the first element of an array, we need to use the index 0, and if we want to access the second element, we need to use the index 1, and so on. This is important to keep in mind when working with arrays in JavaScript, as it can lead to off-by-one errors if we are not careful when accessing elements of the array.
//javascript arrays are not associative, meaning that the elements of the array are not accessed using keys or properties, but rather using numeric indices. This means that we cannot use string keys to access elements of an array, and we cannot add properties to an array like we can with objects. Instead, we need to use numeric indices to access and manipulate the elements of the array. This is an important distinction to keep in mind when working with arrays in JavaScript, as it can lead to confusion if we are not careful when trying to access or manipulate elements of the array.
//javascript arrays are not associative arrays and so ,array element cannot be accessed using arbitrary keys or properties, but rather using numeric indices. This means that we cannot use string keys to access elements of an array, and we cannot add properties to an array like we can with objects. Instead, we need to use numeric indices to access and manipulate the elements of the array. This is an important distinction to keep in mind when working with arrays in JavaScript, as it can lead to confusion if we are not careful when trying to access or manipulate elements of the array.
// Creating an Array
let myArray = [1, 2, 3, 4, 5] // it is an array literal and it is the most common way to create an array in JavaScript. It is denoted by square brackets [] and the elements of the array are separated by commas. The resulting myArray variable will contain the array [1, 2, 3, 4, 5].
console.log(myArray) // it will give the output [1, 2, 3, 4, 5]
console.log(typeof myArray) // it will give the output object because arrays are a type of object in JavaScript

let myArray2 = new Array(1, 2, 3, 4, 5) // it is an array constructor and it is another way to create an array in JavaScript. It is denoted by the keyword "new" followed by the Array constructor, which creates a new instance of the Array object. The resulting myArray2 variable will contain the array [1, 2, 3, 4, 5].
console.log(myArray2) // it will give the output [1, 2, 3, 4, 5]
console.log(typeof myArray2) // it will give the output object because arrays are a type of object in JavaScript

let myArray3 = new Array(5) // it will create an array of length 5 with all elements as undefined. It is denoted by the keyword "new" followed by the Array constructor, which creates a new instance of the Array object. The resulting myArray3 variable will contain the array [undefined, undefined, undefined, undefined, undefined].
console.log(myArray3) // it will give the output [undefined, undefined, undefined, undefined, undefined]
console.log(typeof myArray3) // it will give the output object because arrays are a type of object in JavaScript


const myArr = [0, 1, 2, 3, 4, 5]
const myHero = ["ironman", "spiderman", "thor", "hulk", "captain america"]
const myGod = ["shiva", "vishnu", "brahma", "ganesh", "hanuman"]
console.log(myArr [2]) // it will give the output 2 because arrays are zero indexed and the element at index 2 is 2
console.log(myHero[3]) // it will give the output hulk because arrays are zero indexed and the element at index 3 is hulk
console.log(myGod[4]) // it will give the output hanuman because arrays are zero indexed and the element at index 4 is hanuman
console.log(myGod[10]) // it will give the output undefined because arrays are zero indexed and the element at index 10 is undefined because it is out of bounds of the array

// ARRAYS METHODS
// push() method is used to add one or more elements to the end of an array and returns the new length of the array. It modifies the original array and does not return a new array. The syntax for the push() method is: array.push(element1, element2, ..., elementN) where element1, element2, ..., elementN are the elements to be added to the end of the array. The push() method can take any number of arguments and adds them to the end of the array in the order they are provided.
myArr.push(6) // it will add the element 6 to the end of the array myArr and it will return the new length of the array which is 7
console.log(myArr) // it will give the output [0, 1, 2, 3, 4, 5, 6]

myHero.push("black panther", "doctor strange") // it will add the elements "black panther" and "doctor strange" to the end of the array myHero and it will return the new length of the array which is 7
console.log(myHero) // it will give the output ["ironman", "spiderman", "thor", "hulk", "captain america", "black panther", "doctor strange"]

myGod.push("kali", "durga", "lakshmi") // it will add the elements "kali", "durga", and "lakshmi" to the end of the array myGod and it will return the new length of the array which is 8
console.log(myGod) // it will give the output ["shiva", "vishnu", "brahma", "ganesh", "hanuman", "kali", "durga", "lakshmi"]

// pop() method is used to remove the last element from an array and returns that element. It modifies the original array and does not return a new array. The syntax for the pop() method is: array.pop() where array is the array from which the last element is to be removed. The pop() method does not take any arguments and removes the last element of the array, returning that element as the result.
myArr.pop() // it will remove the last element 6 from the array myArr and it will return that element which is 6
console.log(myArr) // it will give the output [0, 1, 2, 3, 4, 5]

myHero.pop() // it will remove the last element "doctor strange" from the array myHero and it will return that element which is "doctor strange"
console.log(myHero) // it will give the output ["ironman", "spiderman", "thor", "hulk", "captain america", "black panther"]

myGod.pop() // it will remove the last element "lakshmi" from the array myGod and it will return that element which is "lakshmi"
console.log(myGod) // it will give the output ["shiva", "vishnu", "brahma", "ganesh", "hanuman", "kali", "durga"]

myArr.unshift("bholanath") // it will add the element "bholanath" to the beginning of the array myArr and it will return the new length of the array which is 7
console.log(myArr) // it will give the output ["bholanath", 0, 1, 2, 3, 4, 5]
myArr.shift() // it will remove the first element "bholanath" from the array myArr and it will return that element which is "bholanath"
console.log(myArr) // it will give the output [0, 1, 2, 3, 4, 5]

console.log(myHero.length) // it will give the output 6 because the length of the array myHero is 6
console.log(myGod.includes("hanuman")) // it will give the output true because "hanuman" is present in the array myGod
console.log(myArr.indexOf(3)) // it will give the output 3 because the element 3 is present at index 3 in the array myArr
const newArr =myArr.join("-") // it will join the elements of the array myArr into a string with a separator "-" and it will return that string which is "0-1-2-3-4-5"
console.log(newArr) // it will give the output "0-1-2-3-4-5"
console.log(typeof newArr) // it will give the output string because newArr is a string

//slice method is used to extract a portion of an array and returns a new array. It does not modify the original array. The syntax for the slice() method is: array.slice(start, end) where start is the index at which to begin extraction and end is the index at which to end extraction (not included in the extracted portion). If end is not provided, it will extract until the end of the array. The slice() method can take negative indices, which count from the end of the array. For example, slice(-2) will extract the last two elements of the array.

console.log("A " ,myArr);

const myn1 = myArr.slice(1,3) // it will extract the elements from index 1 to index 3 (not included) from the array myArr and it will return a new array which is [1, 2]
console.log(myn1);
console.log("B",myArr); //output is B [0, 1, 2, 3, 4, 5] because the slice() method does not modify the original array myArr

const myn2 = myArr.slice(2) // it will extract the elements from index 2 to the end of the array myArr and it will return a new array which is [2, 3, 4, 5]
console.log(myn2);
console.log("C",myArr); //output is C [0, 1, 2, 3, 4, 5] because the slice() method does not modify the original array myArr


//splice method is used to add or remove elements from an array and returns the removed elements as a new array. It modifies the original array. The syntax for the splice() method is: array.splice(start, deleteCount, item1, item2, ..., itemN) where start is the index at which to begin changing the array, deleteCount is the number of elements to be removed from the array starting from the index specified by start, and item1, item2, ..., itemN are the elements to be added to the array starting from the index specified by start. The splice() method can take any number of arguments and can be used to add or remove elements from any position in the array.
const myn3 = myArr.splice(1,3) // it will remove the elements from index 1 to index 3 (not included) from the array myArr and it will return a new array which is [1, 2, 3] and it will modify the original array myArr to [0, 4, 5]