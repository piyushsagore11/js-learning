console.log(`Creating a class vehicle details:`);
 class Vehicle {
    constructor(model, colour, fuelCapacity, brand, registrationNo){
            this.model=model;
            this.colour=colour;
            this.fuelCapacity=fuelCapacity;
            this.brand=brand;
            this.registrationNo=registrationNo;
            
    }
    detail(){
        console.log(`Vehicle Details => Model: ${this.model}, colour: ${this.colour}, Fuel Capacity: ${this.fuelCapacity}, Brand: ${this.brand}, Registration No: ${this.registrationNo}`);
    }
    
}
const thar = new Vehicle("Thar", "Black",55,"Mahindra", "MH01ZZ5858");
thar.detail();

const creta = new Vehicle("Creta", "Black",50,"Hyundai", "MH02AA0033");
creta.detail();

const brezza = new Vehicle("Brezza", "Red",52,"Suzuki", "MH03DD1133");
brezza.detail();

const fortuner = new Vehicle("Fortuner", "White",65,"Toyota", "MH04FF1111");
fortuner.detail();

const hector = new Vehicle("Hector", "Silver",56,"MG", "MH01ZA6060");
hector.detail();

console.log(`===== Traversing array object ======`);
const arrayOfVechicles = [thar, creta, brezza, fortuner,hector];
for (const element of arrayOfVechicles) {
   element.detail(); 
}
console.log(`Creating a class college details:`);
class College{
    constructor(name,university,city,course){
       this.name=name;
       this.university=university;
       this.city=city;
       this.course=course;
    }
    detail(){
        console.log(`College Details=> Name: ${this.name}, University: ${this.university}, City: ${this.city}, Course:${this.course}`);
    }
}
const janta = new College("Janta College", "GU","Chandrapur","B.SC");
janta.detail();
const coep = new College("COEP College", "SBPU","Pune","Engineering");
coep.detail();
const vidya = new College("Vidya Niketan Jr College", "RTMNU","Nagpur","10+2");
vidya.detail();
const kdk = new College("KDKCE", "RTMNU","Nagpur","MBA");
kdk.detail();