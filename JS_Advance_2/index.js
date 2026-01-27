// *************************BROWSER EVENTS*************************

// Eventlistener: It is a method that attaches an event handler to a specified element without overwritting existing event handlers.

// syntax: <event-target>.addEventListener(<event-type>, <function to run when event happens>).

document.addEventListener('click', function() {
    console.log('I clicked on document');

});  //so when we click anywhere on the document it will print the message in the console.


// Example 2:

let content = document.querySelector('h1');

content;

content.addEventListener('click', function() 
       {
        content.style.background = 'red';
       }
);  //so when we click on the h1 element the background color will change to red.


// **************************PHASES OF EVENT*****************************
// 1> Capturing Phase: we will try to understand this using an example. let's say we have <html> -> <body> -> <div id='wrapper'> -> <p> --------- </p> </div> </body> </html>   and we have to add a listener to p tag, so in capturing phase the event will first be captured by the outermost element i.e. html and then it will go to body then to div and finally to p tag.

// 2> Target Phase: as soon as the event reaches the target element i.e. p tag here, this phase starts.

// 3> Bubbling Phase: when the event has reached the target element and the event is handled, then the event starts to bubble up i.e. it goes to its parent element then to body and finally to html.


 