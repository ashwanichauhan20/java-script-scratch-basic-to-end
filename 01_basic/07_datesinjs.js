 // Date
 // The Date object in JavaScript is a built-in object that provides functionality for working with dates and times. It allows you to create, manipulate, and format dates and times in various ways. The Date object can be used to represent a specific point in time, perform date calculations, and format dates for display.
 // Creating a Date Object
 let myDate = new Date() // it will give the current date and time in the local timezone of the system where the code is running. The Date object in JavaScript represents a single moment in time in a platform-independent format. When you create a new Date object without any arguments, it initializes to the current date and time based on the system's clock and timezone settings. it is denoted by the keyword "new" followed by the Date constructor, which creates a new instance of the Date object. The resulting myDate variable will contain the current date and time when the code is executed.
 console.log(myDate.toDateString())
 console.log(myDate.toString())
 console.log(myDate.toLocaleDateString())
 console.log(typeof myDate)

 let myCreatedDate =new Date(2023,0,23) // month is 0 based index so 0 means january and 1 means february and so on
 let myCratedDate = new Date(2023 ,0 ,23 ,5 ,3 ) // year , month , date , hours , minutes
 let myCreatedDate = new Date("2023-01-14") // it is a string format and it is in ISO format and it is the recommended format for creating a date object from a string because it is unambiguous and it is supported by all browsers and it is also the default format for the Date constructor when a string is passed as an argument.
 let myCreatedDate = new Date("01-14-2023") // it is an indian format and it is not recommended because it is ambiguous and it may not be supported by all browsers and it may give different results in different browsers because of the different date parsing algorithms used by different browsers.
 console.log(myCreatedDate.toLocaleString()); // it will give the date and time in local format


 let myTimeStamp = Date.now()
 console.log(myTimeStamp); // it will give the time in milliseconds since 1970-01-01 and it is a static method of the Date object and it returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
 console.log(myCratedDate.toLocaleString()); // it will give the date and time in local format eg: 1/23/2023, 5:03:00 AM
 console.log(myCratedDate.getTime()); // it will give the time in milliseconds since 1970-01-01
 console.log(Math.floor(Date.now() / 1000)); // for a converting to seconds devided by 1000 ,it give in devimal so we use math.floor to remove the decimal part and get the seconds only
 

 let newDate = new Date()
 console.log(newDate.getFullYear()) // it will give the year of the date object eg: 2023
 console.log(newDate.getMonth()) // it will give the month of the date object and it is 0 based index so 0 means january and 1 means february and so on
 console.log(newDate.getDate()) // it will give the date of the date object eg: 23 date of the month
 console.log(newDate.getHours()) // it will give the hours of the date object eg: 5 hours in 24 hours format
 console.log(newDate.getMinutes()) // it will give the minutes of the date object eg: 3 minutes
 console.log(newDate.getSeconds()) // it will give the seconds of the date object eg : 0 seconds
 console.log(newDate.getMilliseconds()) // it will give the milliseconds of the date object  eg: 0 milliseconds     
 console.log(newDate.getDay()) // it will give the day of the week of the date object and it is 0 based index so 0 means sunday and 1 means monday and so on
 
 // '${ newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}' // it will give the date in dd-mm-yyyy format and we add 1 to the month because it is 0 based index
 console.log(`${ newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`) // it will give the date in dd-mm-yyyy format and we add 1 to the month because it is 0 based index
newDate.toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) // it will give the date in a more readable format eg: Monday, January 23, 2023
