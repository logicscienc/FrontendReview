// to print something on console
console.log("Namaste Duniya");

let a = "Love"
console.log(a);

let lastName="Babber";
console.log(lastName);

lastName= 3;
console.log(lastName);

// Ternary operator
let age=22;
let statuss = (age>=18)? "I can vote":"I cannot vote";

console.log(statuss);

// if else
let marks= 98;
if(marks>=90){
    console.log("A");
}
else if(marks>=80){
    console.log("B");
}
else if(marks>=70){
    console.log("C");
}
else {
    console.log("D");
}


// Switch case

let num=1
 switch(num) {
    case 1: console.log("A")
    break;
    case 2: console.log("B")
    break;
    case 3: console.log("C")
    break;
    default: console.log("D");
 }

//  for loop

//  for(let i=0; i<=5;i=i+1){
//     console.log(i);
//  }

// //  while loop
//  let i=0;
//  while(i<=5){
//      console.log(i);
//      i++;
//  }

//  do while loop

let y=1;
do{
    console.log(y);
    y++;
}while(y<10);