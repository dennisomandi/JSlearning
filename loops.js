// here I am doing some loops exercise. //

//TASK 1 //
// Write a piece of code that will write numbers from 100 to 0 to the console, but in steps of 10; so 100, 90, 80... etc.//

for (i = 100; i >=0; i -= 10){
    console.log(i);
}

/* Modify the previous program so that it asks the user for the first and last number it uses instead of 100 and 0 (hint: use the prompt dialog).
Check if the entered values are correct (that the initial value is greater than the final value). */

let UpperLimit = Number(prompt("Enter a number", 0));
let LowerLimit = Number(prompt("Enter a number", 0));

if (!Number.isNaN(UpperLimit) && !Number.isNaN(LowerLimit) && UpperLimit > LowerLimit);
for (i = UpperLimit; i >= LowerLimit; i -= 10){
    console.log(i);
}