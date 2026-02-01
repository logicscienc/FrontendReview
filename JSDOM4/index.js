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



// *****************************************FETCH API*****************************************************

// get request using fetch

// let obj = {
//     heading: "head"
// };

// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1')

//     console.log(content);
// }
// utility();


// post request using fetch

// async function helper(){
//     let options = {
//        method: 'POST',
//        body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//        }),
//        headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//        },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }

// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }

// utility();


// *****************************************CLOSURES**************************************************************

// clousers: when we have nested function then it is closer and we use refrenses.


function init() {
    let name = 'Mozilla'; //name is a local variable created by init
    function displayName() {
        let name = "Babbar";
     // displayName() is the inner function, that forms the closure.
        console.log(name);  //use variable declared in the parent function.
    }
    displayName();
}

init();


