/* To store a function in a variable or pass it as an argument to call a function, 
you do not necessarily have to declare it previously and use its name. */

function add(a, b) {
    return a + b;
}

let myAdd = add;
console.log(myAdd(10, 20)); 	// -> 30
console.log(add(10, 20));	// -> 30
