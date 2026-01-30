// adding 100 para
// const t1 = performance.now();
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para' + i;

//     document.body.appendChild(newElement);
// }

// const t2 = performance.now();

// console.log(`Time taken to add 100 para is ${t2 - t1}  `);

// optimising the above code a bit.

// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is Para' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);

// performance.now(): Standard way to measure how long a piece of code takes to run.

// *****************************REFLOW AND REPANT*************************************************

// Reflow: It is the process of calculating the dimension and position of page element. like take an example of adding 100 para above, each time we add a para browser has to recalculate the height of the page and other elements. this process is called reflow.

// Repaint: It is the process of redrawing the element onn the screen. like changing the background color of an element will not require reflow .

// ********************DOCUMENT FRAGMENT*************************************************

// It is a lightweight container used to hold a portion of the document structure comprised of nodes just like a standard DOM node. If we add or update something in document fragment it does not impact the live DOM tree, so no reflow or repaint is required. once we are done with all the updates we can append the document fragment to the live DOM tree.

let fragment = document.createDocumentFragment();
for(let i =1; i<=100;i++){
     let newElement = document.createElement('p');
    newElement.textContent = 'This is Para' + i;

    fragment.appendChild(newElement)

}

document.body.appendChild(fragment);  // 1 Reflow and 1 Repaint



// *********************************CALL STACK ***********************************************************

// single threaded: JS can do only one task at a time. it has a single call at a time.

// Call Stack: It is a data structure that keeps track of the function execution in a program. it follows LIFO(last in first out) principle.


// syncronous language: line by line execution.


function addPara(){
    let para = document.createElement('p');

    para.textContent = 'Js is Sinngle';
    document.body.appendChild(para);
}


function appendNewMessage(){
    let para = document.createElement('p');

    para.textContent = 'Kya haal chaal';
    document.body.appendChild(para);
}

addPara();
appendNewMessage();

// synchronous: occuring at the same time.

// ************************************EVENT LOOP *********************************************************

// non synchronous or async: (event Listner) We call asynchronous to those whose occurance depends on event. like for example we will run a function only on click then that is async.

// Event Loop: let's understand using some example, like we have call stack(), brower and event queue. and we have code:- 1. console.log('Hi'); 2. element.addEventListener('click', function(){console.log('123')}); 3. console.log('Hello').. So according to call stack at first our first line of code will run and it get an entry in my call stack and then it will print Hi and then it's entry will get deleated, then the second async function will execute and get an entry but as it is async brower will allocate a task like we had to execute this function only on click but until it doesnot click after few sec the call stack remove it's enytry and then the third synchronous function will get an entry and print Hello but in between all this if someone click then that function will get an entry in the event queue and that event queue will keep a track in the call stack and only run this function only if the stack is empty and not running any sync. function..  That is why we call it Loop.


//    OR



// Event Loop:  JavaScript runs synchronous code first using the call stack.
// addEventListener registers a callback with browser Web APIs.
// When the event occurs, the callback is pushed to the event queue.
// The event loop continuously checks if the call stack is empty, and only then moves the callback from the queue to the call stack for execution.


// *********************************SET TIME OUT*******************************************************

// setTimeOut(): 


setTimeout(function(){
    console.log('Hello Everyone')
}, 5000);


// ********************************************HOW CONCURRENCY IS ACHIEVED IN JS*********************************

// javascript is a single threaded language we all know. It can do only one thing at a time, It has one call stack, No true parallel execution, Then how does it feel like JS does many things at once? That’s where concurrency comes in:  Think of JS like a smart resturant-> Chef: JavaScript(single chef), Orders = Tasks, Kitchen timers-> Browser. The chef:Takes an order, If it’s quick → finishes it, If it takes time → gives it to the kitchen timer and moves on. 

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Execution order: Start, End, Promise, Timeout.

// JavaScript achieves concurrency using the event loop, Web APIs, and task queues, allowing it to handle multiple asynchronous operations without blocking the single-threaded call stack.
