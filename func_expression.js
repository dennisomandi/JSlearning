/* To store a function in a variable or pass it as an argument to call a function, 
you do not necessarily have to declare it previously and use its name. */

function add(a, b) {
    return a + b;
}

let myAdd = add;
console.log(myAdd(10, 20)); 	// -> 30
console.log(add(10, 20));	// -> 30

// We can shorten this notation and declare the function by storing it in a variable //

let mAdd = function add(a, b) {
    return a + b;
}

console.log(mAdd(10, 20)); // -> 30
console.log(add(10, 20)); // -> 30

