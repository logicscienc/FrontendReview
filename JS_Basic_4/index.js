console.log("Kye haaal");

run();


// function declaration
function run() {
    console.log("running");
}

// function call or invoke
run();

// function assignment or named function assignment
let stand = function walk() {
    console.log("walking");
};

stand();

let jump = stand;
jump();

// Anonymous function assignment
let stand2 = function(){
    console.log("standing");
}

stand2();

// As we know js is a dynamic language.
let x = 1;
x = 'a';

console.log(x);



// Note: In js their is a special object called 'argumnets' which holds all the arguments passed to a function. This 'arguments' looks like an array but it is not an array. It is an array like object.

// what if we want to calculate the sum of n numbers? let's see how we can do that using 'arguments' object.

// function sum(a,b) {
//     let total = 0;
//     for(let value of arguments) 
//         total = total + value;
//     return total;
// }

// let ans = sum(1,2,3,4,5,6,7);
// console.log(ans);
// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// }

// function with arguments
// function sum(a,b) {
//     return a + b;
// }

// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());

// console.log(sum(1,2));

// let ans = sum(1,2,3,4,5,6,7);

// Rest operator (...): It is used to represent an indefinite number of arguments as an array. 
// function sum(...args) {
//     console.log(args);
// }

// sum(1,2,3,4,5,6,7);

// Default parameters: It allows us to set default values for function parameters in case no value or undefined is passed.

function intrest(p, r=5, t=10) {
    return (p*r*t)/100;
}

console.log(intrest(1000));  // r and t will take default valuse that is 5 and 10 respectively. But in case if we pass values for r and t then instead of default values the passed values will be used.




// ************************* GETTER AND SETTER **********************************
// Getter: access properties
// Setter: change or manipulate properties

let person = {
    fName : 'Love',
    lName: 'babbar',

    get fullName(){
        return `${person.fName} ${person.lName}`;
    },

    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

console.log(person.fullName); //Getter called

person.fullName = 'Dhananjay Kumar' //Setter called

