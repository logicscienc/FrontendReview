// Example of syncronous code
// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');  //now the outputs will be fisrt second


// setTimeout(function(){
//     console.log('third');
// }, 3000);

// function sync(){
//     console.log('first');
//  }
//  sync();
//  console.log('second');   // now the output will be first second third


// *************************************PROMISE *********************************************************

// let meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside Promise1');
//     }, 5000);

//     // resolve(2233);
//      reject(new Error('Error occord'));
// });

// meraPromise.then((value) => {console.log(value)}, (error) => {console.log("Recieved on Error")});




// let meraPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside Promise2');
//     }, 3000);

//     // resolve(2233);
//     // reject(new Error('Error occord'));
// });

// console.log('Pehla');


// let waadaa1 = new Promise(function(resolve, reject){
//     setTimeout(()=> {
//         console.log('setimeout1 started');
//     }, 2000);
//     resolve(true);
// })

// let output = waadaa1.then(() => {
//     let waadaa2 = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log('setimeout2 started');
//         }, 3000);
//         resolve("waada 2 resolved");
//     })

//     return waadaa2;
// })

// output.then((value) => console.log(value));     // so the output will be like waada 2 resolved setimeout1 started setimeout2 started


// *******************************ASYNC AWAIT****************************************************

// async-await: special syntax used to work with promises.

// async function abcd(){
//     return "Anju";
// }


// async function utility(){
//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Delhi me bhot garmi hai");
//         },5000);
//     });

//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hyderabad is Cool");
//         },5000);
//     });


//     // if we want our function dose not run in parallel we need to use await.
//     let dM = await delhiMausam;
//     let hM = await hydMausam;

//     return [dM, hM];
// }




