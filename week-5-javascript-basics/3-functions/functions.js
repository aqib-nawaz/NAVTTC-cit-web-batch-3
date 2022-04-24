//Functions

function add (a,b){
    console.log(a + b)
}

add(1,3);

// Function statement

let sub = function ( a , b){
    console.log(a + b)
}

sub(3,4)

//Arrow functions

let mul = (a,b) => {
    console.log(a*b)
}

//having single parameter

let square = a => a * a;
square(2)

//Callback function

let callbackftn = (a, b, print) => {
    let t = a + b;
    print(t)
}

let print = (value) => {
    console.log(value);
}


callbackftn(3, 4, print)