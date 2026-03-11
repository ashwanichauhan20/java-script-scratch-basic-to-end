// const tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton object
 tinderUser.id = '123abc';
tinderUser.name = 'John';
tinderUser.isLoggedIn = false;

// console.log(tinderUser); 

const regularUser = {
    email: 'ashish@gmail.com',
    fullName: {
        userFullName: {
            firstName: 'Ashish',
            lastName: 'Kumar'
        }
    }
}   
//console.log(regularUser.fullName.userFullName.firstName); //if we want to access the first name of the regular user, we can do it like this. We have to go through the nested objects to get to the first name.

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};
//const obj3 = {obj1,obj2} // we can also use the spread operator to merge two objects.
const obj3 = Object.assign({}, obj1, obj2); // we can also use the Object.assign() method to merge two objects. It takes the target object as the first argument and the source objects as the next arguments. It returns the target object.
console.log(obj3); // {1: 'a', 2: 'b', 3: 'c', 4: 'd'}

const obj4 = {...obj1, ...obj2}; // we can also use the spread operator to merge two objects. It takes the source objects as arguments and returns a new object that contains all the properties of the source objects.
console.log(obj4); // {1: 'a', 2: 'b', 3: 'c', 4: 'd'}

const user = {
    name: 'Ashish',
    age: 25,
    email: 'ashish@gmail.com',}

    user[1].email
    console.log(tinderUser);
    console.log(Object.keys(tinderUser)); // it returns an array of the keys of the object. eg: ['id', 'name', 'isLoggedIn']
    console.log(Object.values(tinderUser)); // it returns an array of the values of the object.eg: ['123abc', 'John', false]
    console.log(Object.entries(tinderUser)); // it returns an array of the key-value pairs of the object. Each key-value pair is represented as an array of two elements, where the first element is the key and the second element is the value.eg: [['id', '123abc'], ['name', 'John'], ['isLoggedIn', false]]
  
console.log(tinderUser.hasOwnProperty('name')); // it returns true if the object has the specified property as its own property, and false otherwise. In this case, it will return true because the tinderUser object has the name property.



const course ={
    courseName: 'JavaScript',
    courseInstructor: 'Ashish',
    coursePrice: 999,
}
course.courseInstructor = 'Ashish Kumar'; // we can also update the value of a property of an object using the dot notation.
course['coursePrice'] = 499; // we can also update the value of a property of an object using the bracket notation.
console.log(course); // {courseName: 'JavaScript', courseInstructor: 'Ashish Kumar', coursePrice: 499}
 
//or

const {courseInstructor} = course;
console.log(courseInstructor); // 'Ashish Kumar'

// {
    // "name": "Ashish",
    // "age": 25,
    // "email": "ashish@gmail.com"
// } // this is a JSON object. It is a string representation of an object. We can convert it to a JavaScript object using the JSON.parse() method. We can also convert a JavaScript object to a JSON object using the JSON.stringify() method.