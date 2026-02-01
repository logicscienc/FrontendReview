const countValue= document.querySelector('#counter');

const increment = () => {
    // get the value from ui. as we know that innerText return the value in string form but we want the integer the value that is why we are going to use parseInt so that the string gets converted into int.
    let value = parseInt(countValue.innerText);

    // update the value
    value = value + 1;

   // set the value onto ui
   countValue.innerText = value;  
}

const decrement = () => {
    // get the value from ui. as we know that innerText return the value in string form but we want the integer the value that is why we are going to use parseInt so that the string gets converted into int.
    let value = parseInt(countValue.innerText);

    // update the value
    value = value - 1;

   // set the value onto ui
   countValue.innerText = value;  
}