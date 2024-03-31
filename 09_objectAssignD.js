let professor={
    name: "Shaukat Ali Khan",
    Age: 40,
    Subject: "Physics",
    College: "KDK College of Engineering",
    City: "Nagpur",
    degree:{
        Engineering:"CSC",
        PHD:"Advance Computing"
    },
    certificate: ["Hacker Rank Participation" , "Certificate in IFE course","Certificate Adv Programming"]

}
console.log(`details of professor`);
console.log(professor);
console.log(`=============Adding propertise========`);
professor.totalExperience="14 years"
console.log(professor);

console.log(`=============Modifying propertise========`);
professor.Age=42
professor.certificate.splice(2,0,"Oracle certified")
console.log(professor);
console.log(`==========last element of array certificate===========`);
console.log(`last element of array certificate:${professor.certificate[professor.certificate.length-1]}`);
console.log(`complete Object`);
console.log(professor);
console.log(`tranverse of array certificate:`);



for (let element of professor.certificate) {
  console.log(element);
}



