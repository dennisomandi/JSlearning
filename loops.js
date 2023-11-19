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

//TASK 2 //
/*There are ten different numbers in the following numbers array:

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

Write a program that first writes out all these numbers on the console, 
then only those that are even (hint: the remainder of dividing an even number by 2 is equal to 0), 
then only those that are larger than 10 and at the same time smaller than 60.*/

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
for (i in numbers){
    console.log(i);
}

for (i in numbers){
    if (i % 2 === 0){
        console.log(i);
    }
}

for (i in numbers){
    if (i > 10 && i < 60){
        console.log(i);
    }
}

//TASK 3 //
/* 
Write a program using a loop that will ask the user for the name of the movie (first prompt) and its rating from www.imdb.com (second prompt). 
The program will allow you to enter as many movies as you want into the movies array. 
Each element of the array will be an object, consisting of two fields: title and imdb. 
The input is completed if the user presses Cancel in the prompt dialog. 
Then the program should first print out to the console all movies that have a rating of less than 7, 
then those whose rating is greater than or equal to 7. 
Write the name of the movie and its rating next to each other, e.g.:
*/

let movies = [];
while (true){
let title = prompt("Title of the movie");
let rating = prompt("What the IMDB rating of the movie");

if (movie === null || rating === null){
    break;
} else {
    movies.push({title : movie, rating: Number(rating)});
}
}
console.log("All with ratings under 7:");
for (movie of movies) {
    if (movie.rating < 7) {
        console.log(`${movie.title} (${movie.rating})`);
    }
}

console.log("All with ratings over 7:");
for (movie of movies) {
    if (movie.rating >= 7) {
        console.log(`${movie.title} (${movie.rating})`);
        break;
    }
}