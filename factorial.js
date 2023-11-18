//A function that gives a factorial of a number //

function factorial (n){
    let result = 1;
    while(n > 1){
        result *= n;
        n--
    }
    return result
}
console.log(factorial(6));

// a simple version of the code above using a tenary operor //

function factorial (n){
    return n > 1 ? n * factorial (n - 1) : 1;
}
console.log(factorial(6));