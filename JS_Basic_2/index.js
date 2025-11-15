// console.log("JS Basic Class 2");

// // object creation
// let rectangle = {
//     // these are properties
//     length: 1,
//     breadth: 2,

//     // this is how we define function or mathod inside an object. 

//     draw: function() {
//         console.log("Drawing Rectangle");
//     }
// }


// // factory function-> we need because we can't create objects again an again if our need is more, what we want is a simple this which we declair at one time and use it whenever we want. if we want to make changes in my objests dynamicaley we can use paramiters

// function createRectangle(len, bre)  {
//     return rectangle = {
//     // these are properties
//     length: len,
//     breadth: bre,

//     // this is how we define function or mathod inside an object. 

//     draw: function() {
//         console.log("Drawing Rectangle");
//     }
// }

// }


// // If we want to access anything which is inside this factory fuction createRectangle we need to use dot notation just like in below
// rectangle.breadth;
// rectangle.length;
// rectangle.draw();

// // now we can make an object , now here we can send their size too whatever we want to keep. 
// let obj = createRectangle(5,3);

// obj.breadth;
// obj.length;
// obj.draw();


// constructor function -> Pascal Notation -> first lettwr of every word is Capital -> NumberOfStudents
// constructor function -> prop/methods -> initialise/Define
// function Rectangle(len, bre){
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function(){
//         console.log("drawing");
//     }
// }

// object creation using constructor function, new is a kind of keyword which gives us a new empty object.
// let rectangleObject = new Rectangle(4,6);

// the below code show how we can get benefits from dynamic nature of object. -> we can add or even delete anything . we can add new propertites, methodes etc.
// rectangleObject.colour = "yellow";
// console.log(rectangleObject);

// delete rectangleObject.colour;
// console.log(rectangleObject);


// this below code show how we can call our object  which is creted using constructor function
// rectangleObject.breadth;
// rectangleObject.length;
// rectangleObject.draw();


// Constructor Property: every object in js have property called constructor property which basically tells us how this object is created.
// rectangleObject.constructor;

// we know that the constructor of rectangleObject is Rectangle but what if we want to check who is the constructor of Rectangle function. 


// Premetive or value types
// let a = 10;
// let b= a;

// a++;
// console.log(a);
// console.log(b); 


// Reference types

// let c = {value: 10};
// let d = c;

// c.value++;
// console.log(c.value);
// console.log(d.value);

// let's see how it works when we pass premetive valuse in a function

// let e = 10;

// function inc(e){
//     e++;
// }

// inc(e);

// console.log(e);

// let's see how it works when we pass  valuse by Reference in a function

// let a = {value:10};

// function inc(a){
//       a.value++;
// }
// inc(a);
// console.log(a.value);

// let's learn about loop in object
// 1. for in loop
// 2. for of loop

// 1.for in loop

let rectangle = {
    length: 2,
    breadth: 4
};

// for(let key in rectangle) {
    // keys are reflected through key variable
    // values are reflected through rectangle[key]
    // console.log(key, rectangle[key]);
// }

// let's try to access the rectangle object using for of loop. but one thing to remember is that for of loop only works with itarable objects like array, string , map etc. but object is not itrable so to make it itrable we use object.keys() method which returns an array of keys of that object.

for(let key of Object.entries(rectangle)){
    console.log(key);
}

// now if we want to know is in our object some specific property is there or not , we can check by if else 

if('length' in rectangle) {
    console.log('Present');
}
else{
    console.log("Absent");
}  



// Object Cloning

// 1. Object cloning using iteration
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

// 2. object cloning using Object.assign() method

// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;

// console.log(dest);

// 3. object cloning using spread operator(...)

let src = {
    a:10,
    b:20,
    c:30,
};

let dest = {...src};
console.log(dest);

src.a++;

console.log(dest);