console.log(`======Step 1======`);

let show = () => {
    console.log(`Good Morning, Today is Monday`);
}
show();
console.log(`======Step 2======`);

let multiplicationNo=(num1,num2,num3)=>{
    console.log(`multiplication of 3 parameters ${num1},${num2},${num3} is :${num1*num2*num3}`);
}
multiplicationNo(5,5,2);
multiplicationNo(10,4,1)
console.log(`======Step 3======`);
let addition = (n1,n2,n3,n4,n5) => {
    let result = n1+n2+n3+n4+n5;
    return result;
  }
  let additionResult = addition(100,100,200,349,756);
  console.log(`addition of arguments : ${additionResult}`);
  let concatResult=addition("I am ", "learning ", "ES6 ", "features ", "in depth")
 console.log(`addition of arguments : ${concatResult}`);