console.log(`1. count the total number vowels including small and capital vowels for using for loop-->
"I am very good IT Developer" `);

const word= " I am very good IT Developer";
const vowels= "aeiou";
let vowelsCount = 0;
for (let index = 0; index < word.length; index++) {
    let char=word.charAt(index);
    let lowerCase = char.toLowerCase();
    if (vowels.includes(lowerCase)) {
        vowelsCount++;
    } 
    
}
console.log(vowelsCount);
console.log(`2.Write a function to get the sum of cube of numbers from 1 to 5.`);
let sum =0;
for (let index = 0; index <=5; index++) {
sum=sum+index*index*index;
    
}
console.log(sum);
console.log(`find oddposition of sentence`);
function oddPositionedChars(word) {
    for (let index = 0; index < word.length; index++) {
        const element = word.charAt(index);
        if (index %2!=0 && element!=" ") {
            console.log(element);
            
        }

        
    }
    
}
oddPositionedChars("Hard Work always pays back");
console.log(`second sentence=====`);
oddPositionedChars("Soon I will be UI IT Champ")
