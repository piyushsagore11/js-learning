 console.log(`======step 1================`);
 
 function squareOfWorldLength(sentence){
    var lengthOfSentence = sentence.length;
    var squareLength =  lengthOfSentence**2;
console.log(`length of the word ${sentence}:${squareLength}`);
}
squareOfWorldLength("JavaScript");
squareOfWorldLength("Google chrome");
squareOfWorldLength("Developer Smart");
console.log(`======step 2================`);

var statement="I am Angular Developer";
var lengthOfStatement=statement.length;

var noOfWords=statement.split(" ").length;
var stringDivide=lengthOfStatement/noOfWords;
console.log(`length of string after dividing is:${stringDivide}`);
var stringmultiply=lengthOfStatement*noOfWords;
console.log(`length of string after Multiply is:${stringmultiply}`);




