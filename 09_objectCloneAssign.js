console.log(`create object bankSBI:`);
const bankSBI={
    BankName:"State Bank of India",
    State: "Maharashtra",
    Branch:"Chandrapur Branch",
    ifscCode:"MAHB0000055",
}
console.log(bankSBI);
console.log(`create object bankLocation:`);
const bankLocation={
    Street:"Main Road",
    City:"Chandrapur",
    Pincode:442401,
    
}
console.log(bankLocation);
console.log(`===== Cloning an Object using Object.assign()======`);
const cloneSBI = Object.assign({}, bankSBI);
const cloneLocation=Object.assign({},bankLocation);
console.log(cloneSBI,cloneLocation);

const rateOfIntrest ={
    homeLoanIntrest: "11% ",
    personalLoanIntrest: "13%",
    dueIntrest:"7%"
}
console.log(rateOfIntrest);
console.log(`SBI Bank Chandrapur`);
const mergeObjectABD=Object.assign({},bankSBI,bankLocation,rateOfIntrest);
console.table(mergeObjectABD);
console.log(`Traverse of an Object`);
for (let key in mergeObjectABD) {
    console.log(`${key}: ${mergeObjectABD[key]}`);
  }