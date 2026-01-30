// *************************BROWSER EVENTS*************************

// Eventlistener: It is a method that attaches an event handler to a specified element without overwritting existing event handlers.

// syntax: <event-target>.addEventListener(<event-type>, <function to run when event happens>).

// document.addEventListener('click', function() {
//     console.log('I clicked on document');

// });  //so when we click anywhere on the document it will print the message in the console.


// Example 2:

// let content = document.querySelector('h1');

// content;

// content.addEventListener('click', function() 
//        {
//         content.style.background = 'red';
//        }
// );  //so when we click on the h1 element the background color will change to red.


// **************************PHASES OF EVENT*****************************
// 1> Capturing Phase: we will try to understand this using an example. let's say we have <html> -> <body> -> <div id='wrapper'> -> <p> --------- </p> </div> </body> </html>   and we have to add a listener to p tag, so in capturing phase the event will first be captured by the outermost element i.e. html and then it will go to body then to div and finally to p tag.

// 2> Target Phase: as soon as the event reaches the target element i.e. p tag here, this phase starts.

// 3> Bubbling Phase: when the event has reached the target element and the event is handled, then the event starts to bubble up i.e. it goes to its parent element then to body and finally to html.


// ******************************THE EVENT OBJECT*********************************************************

// The event object is a special object that contains information about the event that occurred.
// It is passed as an argument to the event handler function.
// The event object has properties and methods that provide information about the event.

// const content2 = document.querySelector('#wrapper');

// content2.addEventListener('click', function(event)
// {
//     console.log(event);
// }
// );



// ****************************THE DEFAULT ACTION AND PREVENTING**************************************************

// the default action is the action that the browser takes when an event occurs.


// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('maza aaya, accha laga');
// })



// ********************************AVOID TOO MANY EVENTS***************************************************

// let myDiv = document.createElement('div');

// function paraStatus(event){
//         console.log('Para' + event.target.textContent);
//     }

// myDiv.addEventListener('click', paraStatus);

// for(let i = 1; i<=100; i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

   

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


// let element = document.querySelector('#wrapper');

// element.addEventListener('click', function(event) {
//     console.log('span per click kiya hai' + event.target.textContent);
// });

let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event) {

    if(event.target.nodeName === 'SPAN')
    {
              console.log('span per click kiya hai' + event.target.textContent);
    }
   
 });

