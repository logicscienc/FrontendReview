// ***************************Documnet Object Model(DOM)*************************************************

// ## Accessing Elements ##
// 1. getElementbyId(' ');
// 2. getElementByClassName();

// querySelector: we can use querySelector in the same way we use to select id or class for adding css properties. 

document.querySelector("text-textpara");


// ****************inner HTML********************** let see how we can get and set the innerHTML of any element. for example let the name of the class of that element to be code-example.

// at first we will fetch that element using querySelector

let codingEx = document.querySelector('.code-example');

// now let's try to print codingEx
codingEx;

// now let's see the HTML content of this element.

codingEx.innerHTML

// now as i told above we can even set the HTML of the element. so let's try to empty the HTML.

codingEx.innerHTML = ''   //


codingEx.textContent   // the output will be like this 'Toggles <h1> Dark </h1>' this basicely shows the content which is inside that element whose class name is code-example.


