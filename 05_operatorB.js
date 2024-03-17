var greaterNumber=function (num1,num2){
var greater= num1>num2 ? num1:num2;
console.log(`greater number between two number is ${greater}`);
}
greaterNumber(-10,10);
greaterNumber(800,899);

console.log(`======================`);
var isEvenOrOddNumber= function (n1) {
    var number1 =n1%2===0 ? "True(given number is even)" :"False(Given No is odd)" ;
    console.log(`For value ${n1}:${number1}`);
}
isEvenOrOddNumber(29);
isEvenOrOddNumber(44);
isEvenOrOddNumber(0);
isEvenOrOddNumber(101);

console.log(`======================`);
var wordLength = function(word){
    
    var result1  = word.length %2==0 ? "EVEN ": "ODD";
    console.log(`The word ${word} has ${result1} length`);
   }
wordLength("JavaScript");
wordLength("developer")
wordLength("Google")


