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
// codingEx

// now let's see the HTML content of this element. 
// innerHTML: whenever we use innerHTML property after adding any new tag inside the text then it will render that tag .

// codingEx.innerHTML

// now as i told above we can even set the HTML of the element. so let's try to empty the HTML. 

// codingEx.innerHTML = ''   //


// codingEx.textContent   // the output will be like this 'Toggles <h1> Dark </h1>' this basicely shows the content which is inside that element whose class name is code-example. if we want to get the text only without the HTML tags then we can use textContent property. whenever we use innerHTML property after adding any new tag inside the text then it will treat it as text .


// codingEx.innerText    // this will also give the same output as textContent. but the difference is that innerText will consider the styling of the element. for example if we have display none property in css then innerText will not fetch that text but textContent will fetch that text.



// ***********************Adding new element/context *****************************

// if we want to add any new tag in the previous existing code then we can use append method. for example if we want to add a new paragraph in the code example whole class name is paraClass. 

//  let content = document.querySelector('.paraClass');

//  content;

//  now we want to add new paragraph in the paraClass class. so we will do like.
// let newPara = document.createElement('p');

// newPara;

// content.appendChild(newPara);

// content;  // now at the end we can even see the para tag.



// ************************insertAdjacentHTML()********************************

// this method helps to add any tag with some text other then only at the end. we just need two things first is the position where we want to add the new tag and second is the new tag with text.

// positions are: before begin, afterbegin, beforeend and afterend.

// now let me show you the actual position with the help of an example. <p>
//       <div>    </div>
//       </p>
// beforebegin: it will add the new tag before the p tag.
// afterbegin: it will add the new tag just after the opening of p tag.
// beforeend: it will add the new tag just before the closing of p tag.
// afterend: it will add the new tag just after the closing of o tag.

// let content2 = $0;  
// content2;



// let newText = document.createElement('h3');

// newText.textContent = 'ABCD';

// content2.insertAdjacentElement('beforeBegin', newText);


// Remove: removeChild(): opposite of appendChild(). a parent element and the child element to remove.


// content2;  //now if we want to remove the h3 tag which we added recently then we will do like this.

let childElement = document.querySelector('.tempText'); // here tempText is a class anme.
// childElement;

// content2.removeChild(childElement);

// content2; //now we can see h3 tag is removed.



// ******************************styling using js************************************

// let style = $0;

// style;

// style.style.color = 'red';

// style.style.backgroundColor = 'white';

// style.style.csstext = 'color:green; background-color:yellow; font-size:4rem;'; 

// setAttribute: it is used to set any attribute of any element. for example if we want to set the class name of any element then we can use setAttribute method.



