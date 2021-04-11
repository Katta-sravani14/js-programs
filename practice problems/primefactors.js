// program to find the factors of an integer

// take input
const prompt = require('prompt-sync')({sigint: true}); 
let num = prompt('Enter a positive number: ');

//console.log(`The factors of ${num} is:`);
console.log("prime factors of "+num+" are" ) 
// looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}
