console.log("======== step1 ================");
function show(){

    console.log("Piyush");
    console.log("Sagore");

}
show();
console.log("======== step2 ================");
function personalDetails(firstName,lastName,collegeName){
    console.log("my first name:",firstName);
    console.log("my last Name:",lastName);
    console.log("my collge name:",collegeName);

}
personalDetails("Piyush", "Sagore", "KDK collge");
console.log("======== step3 ================");
function swapvalues(name1,name2){
    console.log("names before swapping:",name1,name2);
    var temp1=name1;
    name1=name2;
    name2=temp1;
    console.log("names After swapping:",name1,name2);
}
swapvalues("virat","anushka");
swapvalues(1000,2000);

console.log("======== step4 ================");
function addThreeValues(n1, n2, n3){

    console.log("Arguments: ", n1, n2, n3);

    var result = n1+n2+n3;

    console.log("Addition is: ", result);

}

addThreeValues(10.23, 600, 40);
addThreeValues("Hello ", "Good ", "Morning");
