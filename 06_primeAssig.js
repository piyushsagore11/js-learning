const array = [3, 9, 7, 6, 19, 29, 53];
let count = 0;

for (let i = 0; i < array.length; i++) {
    let isPrime = true;
    if (array[i] <= 1) {
        continue;
    }
    for (let j = 2; j <= array[i] / 2; j++) {
        if (array[i] % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        count++;
    }
}

console.log("Number of prime numbers in the array:", count);




function spaceCount(stringSen) {
    let count = 0;
    for (let i = 0; i < stringSen.length; i++) {
        if (stringSen[i] === ' ') {
            count++;
        }
    }
    return count;
}

const sentence_1 = "Revision is the mother of success";
const sentence_2 = "Java Script is the language of internet world";

console.log("Number of spaces in sentence 1:", spaceCount(sentence_1));
console.log("Number of spaces in sentence 2:", spaceCount(sentence_2));
