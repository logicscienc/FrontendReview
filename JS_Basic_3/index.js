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

let numbers = [1,2,3,4,5];

// below are some of ways using which we can insert values in our existing array.
numbers.push(9);  //add 9 at the end of the array

numbers.unshift(8); //add 8 at the start of the array

numbers.splice(2,0, 'a', 'b', 'c', 'd'); //add a,b,c,d at index 2

console.log(numbers);

// Now what if we want to check if the given array conatin a specific value or not we can use include method for that.

numbers.includes(9); //return true


// Array using object

let courses = [
    {no:1, naam: 'Love'},
    {no:2, naam: 'Luv'},
];

console.log(courses);

// we can check if a specific object is present in the array or not using some method.

console.log(courses.includes({no:1, naam: 'Love'})); 





















































































