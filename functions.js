// a simple program without any functions. //

let tempratures;
let sum;
let avgTemp;

tempratures = [18, 28, 36, 45, 78, 73, 67, 82, 14];
i = 0;
for (i = 0, i < tempratures.length, i++){
    sum += tempratures[i];
}

avgTemp = sum / tempratures.length; 