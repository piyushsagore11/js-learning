const arrayNumbers= [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
console.log(`=======step 1=======`);
let lengthArray=arrayNumbers.length;
console.log(`lenghth of an Array ${lengthArray}`);
console.log(`=======step 2=======`);
console.log(`first element:${arrayNumbers[0]} and last element: ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`=======step 3=======`);
console.log(`last third element of array:${arrayNumbers[arrayNumbers.length-3]}`);
console.log(`=======step 4=======`);
console.log(`even no in array are:`);
for (const number of arrayNumbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
console.log(`=======step 5=======`);
console.log(`odd no in array are:`);
for (const number of arrayNumbers) {
    if (number % 2 === 1) {
        console.log(number);
    }
}
console.log(`=======step 6=======`);
console.log(`sum of even positioned elements:`);
let sum = 0;

for (let i = 0; i < arrayNumbers.length; i += 2) {
    sum += arrayNumbers[i];
}
console.log(sum);
console.log(`=======step 7=======`);
console.log(`sum of odd positioned elements:`);
let oddSum = 0;

for (let i = 1; i < arrayNumbers.length; i += 2) {
    oddSum += arrayNumbers[i];
}
console.log(oddSum);
console.log(`=======step 8=======`);

console.log(`sum of all elements in array:`);
let totalSum = 0;

for (let i = 0; i < arrayNumbers.length; i += 1) {
    totalSum += arrayNumbers[i];
}
console.log(totalSum);
console.log(`=======step 9=======`);

console.log(`multiple of 5  in array:`);
const multiplesOf5 = [];

for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] % 5 === 0) {
        multiplesOf5.push(arrayNumbers[i]);
    }
}
console.log(multiplesOf5);
console.log(`=======step 10=======`);

console.log(` number:115 available  in array or not`);

if (arrayNumbers.includes(115)) {
    console.log("Number 115 is available in the array.");
} else {
    console.log("Number 115 is not available in the array.");
}
console.log(`=======step 11=======`);
console.log(` number:23 available  in array or not`);
if (arrayNumbers.includes(23)) {
    console.log("Number 23 is available in the array.");
} else {
    console.log("Number 23 is not available in the array.");
}
console.log(`=======step 12=======`);
console.log(`Adding number at index no 3`);
arrayNumbers.splice(3,0,55,66)
console.log(arrayNumbers);

console.log(`=======step 12=======`);
console.log(`deleting  3 number from index no 4`);
arrayNumbers.splice(4,3)
console.log(arrayNumbers);