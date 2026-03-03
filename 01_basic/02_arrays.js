const marvelHeroes = ["thor", "ironman", "spiderman", "hulk", "captain america"]
const dcHeroes = ["superman", "batman", "wonder woman", "flash", "green lantern"]

marvelHeroes.push(dcHeroes) // it will add the dcHeroes array as a single element to the end of the marvelHeroes array
console.log(marvelHeroes) // it will give the marvelHeroes array with the dcHeroes array as a single element at the end of the marvelHeroes array.
                         // Output: ["thor", "ironman", "spiderman", "hulk", "captain america", ["superman", "batman", "wonder woman", "flash", "green lantern"]]
                         // it take any typeof data as a entry data can be string , number , boolean , array , object and so on
console.log(marvelHeroes);
console.log(marvelHeroes[3][1]); // it will give the hulk because it is the 3rd index of the marvelHeroes array and it is an array and we want to access the 1st index of that array which is hulk eg: marvelHeroes[5][1] it will give the batman because it is the 5th index of the marvelHeroes array and it is an array and we want to access the 1st index of that array which is batman

const allHeros = marvelHeroes.concat(dcHeroes) // it will give a new array which is the combination of the marvelHeroes and dcHeroes arrays and it will not modify the original arrays
console.log(allHeros) // it will give the new array which is the combination of the marvelHeroes and dcHeroes arrays


const another_array = [1, 2, 3, [ 4 , 5 ] , 7 , [ 8 , 9, [ 10, 11 ] ]  ]
const real_array = another_array.flat(Infinity )  //it will give a new array which is the flattened version of the another_array and it will flatten the array to any depth because we have passed Infinity as an argument to the flat method eg another_array.flat(1) it will flatten the array to a depth of 1 and it will give [1, 2, 3, 4, 5, 7, 8, 9, [10, 11]] and another_array.flat(2) it will flatten the array to a depth of 2 and it will give [1, 2, 3, 4, 5, 7, 8, 9, 10, 11]
console.log(real_array) // it will give the new array which is the flattened version of the another_array


console.log(Array.isArray("Ashwani")) //
console.log(Array.from) // it will give array from a string and it will give an array of characters of the string eg: Array.from("Ashwani") it will give ["A", "s", "h", "w", "a", "n", "i"] and Array.from("12345") it will give ["1", "2", "3", "4", "5"] and Array.from("true") it will give ["t", "r", "u", "e"] and so on
console.log(Array.from("Ashwani")) // it will give an array of characters of the string eg: ["A", "s", "h", "w", "a", "n", "i"]



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // it will give a new array which is the combination of the score1 , score2 and score3 variables and it will not modify the original variables eg: Array.of(1, 2, 3) it will give [1, 2, 3] and Array.of("A", "B", "C") it will give ["A", "B", "C"] and so on