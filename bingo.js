/* write a simple code that prompts the user
to enter a number and if the number is greater than 90 
or less that 100. alert the user 
with a Bingo message. Else alert miss.
*/

let number = prompt("Enter a number:", 0);
if (number > 90 && number < 100){
	alert("BIngo");
} else {
	alert("Miss");
}

/*  
Now lets write the same code but remmove if and use the tenary operator
*/

let number = prompt("Enter a number:", 0);
let message = number > 90 && number < 100 ? "Bingo" : "Miss";
alert(message);