// Math:Object : an inbuild object that has properties and mathods for mathematical content.

Math.random();
Math.PI;
Math.round(1.2);
Math.max(2,4,1,6);
Math.min(2, 4, 1, 6);


// String: in js strings are of two types one premitive string and other is string object.

 let lastName = "Luv";  // premitive string

//  if we want to treat our string as an object we can access using dot notation or we can create string object using new keyword.
lastName.length; //3

 let firstName = new String("Luv"); //string object

 typeof lastName;  //return string
 typeof firstName; //return object



//  Template Literals : Template literals are string litrals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. in simple words using theis we can write our string in any format we want.

let message =`Hello ${lastName},
Thanks for the Opportunity

Regards,
Luv`;

console.log(message);


// Data and time object

let date = new Date();

let date2 = new Date("June 20 1998 07:15");

let date3 = new Date(1998, 11, 20, 7 );
console.log(date3);


// we can set different components of date object using set methods.
date3.setFullYear(1947);

console.log(date3);

// Array Object : in javaScript the array is used to store multiple values in a single variable. if it is a interger, float, bool or string doesnt matter.

// let numbers = [1,2,3,4,5];

// below are some of ways using which we can insert values in our existing array.
numbers.push(9);  //add 9 at the end of the array

numbers.unshift(8); //add 8 at the start of the array

numbers.splice(2,0, 'a', 'b', 'c', 'd'); //add a,b,c,d at index 2

console.log(numbers);

// Now what if we want to check if the given array conatin a specific value or not we can use include method for that.

numbers.includes(9); //return true


// Array of object

let courses = [
    {no:1, naam: 'Love'},
    {no:2, naam: 'Luv'},
];

console.log(courses);

// we can check if a specific object is present in the array or not using some method.

console.log(courses.includes({no:1, naam: 'Love'})); //return false because it checks the reference not the content.

// Callback function: A callback function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. and one most imp. thing is parent of call back function is find method of array.

let course = courses.find(function(course) {
    return course.naam == 'Luv';
})

console.log(course);

// Arrow function: 


// Removing elements from an array

// let numbers = [1,2,3,4,5,6,7];

numbers.pop();  // use to remove elemenst from the end.
numbers.shift(); // use to remove elements from the start.
numbers.splice(2, 1); // this is used to remoev any perticular element from the array.like right now 3 will get remove. 


console.log(numbers);


// coping the address of an array

let numbers = [1,2,3,4,5];
let numbers2 = numbers; // so here the array of numbers string get into the numbers2 array by refrence.

// now let's try to empty the array
numbers.length = 0;
numbers.splice(0,numbers.length);

console.log(numbers);
console.log(numbers2);


// combining two array

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);


// slice method

// let sliced = combined.slice(2,3);
// console.log(sliced);

// let marks = [10, 20,30,40,50,60,70,80];
// let sliced2 = marks.slice(2, 6);
// console.log(sliced2)


// spread operator: used to combined arrays

let first = [1,2,3];
let second = [4,5,6];

let combined = [...first, ...second]; //using this we can combine anything together.

let combined2 = [...first, 'a', false, ...second, 'b', true];
console.log(combined2);
console.log(combined);

// we can even create copy using this
let another = [...combined];























































































