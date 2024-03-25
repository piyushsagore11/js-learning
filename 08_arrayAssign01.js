const fruits_seasonal=["Banana","Orange","Apple","Mango","Watermelon"];
console.log(fruits_seasonal);
console.log(`======First and last element=====`);
fruits_seasonal[0]
fruits_seasonal[fruits_seasonal.length-1]
console.log(`first element:${fruits_seasonal[0]} last element:${fruits_seasonal[fruits_seasonal.length-1]}  `);
console.log(`======Add  element papaya before Banana=====`);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);
console.log(`======Remove Mango from Array=====`);
fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);
console.log(`======Add pineapple at last position=====`);
fruits_seasonal.push("Pineapple")
console.log(fruits_seasonal);
console.log(`======Add dragon fruit before Water melon=====`);
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(fruits_seasonal);
console.log(`======Replace Orange With Kiwi=====`);
fruits_seasonal.splice(2,1,"Kiwi");
console.log(fruits_seasonal);
console.log(`======Log the element starting from index 1 to 4=====`);
const elementRequire=fruits_seasonal.slice(1,4);
console.log(elementRequire);