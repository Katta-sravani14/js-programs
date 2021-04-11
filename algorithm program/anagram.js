const input = require("readline-sync")

const utility = require ("./uitility.js")
var a = utility.areAnagram(str1 , str2)
var size = input.questionInt("Enter the size of array: ");
var str1 = [];
for(let i=0;i<size;i++)
{    
   console.log ("enter the new values in array as ")
    str1[i] = input.question("Enter element in an array: ");
}
 console.log (str1)

 var size1 = input.questionInt("Enter the size of array: ");
var str2 = [];
for(let i=0;i<size1;i++)
{    
   console.log ("enter the new values in array as ")
    str2[i] = input.question("Enter element in an array: ");
}
 console.log (str2)



if ( a)
              console.log("The two strings are"
                       + " anagram of each other");

else
    console.log("The two strings are not"
                       + " anagram of each other"); 
      console.log(a)                 
          