console.log("JS Basic Class 2");

// object creation
let rectangle = {
    // these are properties
    length: 1,
    breadth: 2,

    // this is how we define function or mathod inside an object. 

    draw: function() {
        console.log("Drawing Rectangle");
    }
}


// factory function-> we need because we can't create objects again an again if our need is more, what we want is a simple this which we declair at one time and use it whenever we want.

function createRectangle()  {
    return rectangle = {
    // these are properties
    length: 1,
    breadth: 2,

    // this is how we define function or mathod inside an object. 

    draw: function() {
        console.log("Drawing Rectangle");
    }
}

}
