function factorialOfNum(numberForFactorial){
    let fact = 1;
    for (let index = numberForFactorial; index >= 1; index--) { 
        fact = fact * index;
    }
    console.log(`Factorial of ${numberForFactorial} is: ${fact}`);
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum();
factorialOfNum(8);
factorialOfNum();
factorialOfNum(9);
factorialOfNum(0);