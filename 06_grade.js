function gradeCalculation(marks){
    // invalid inputs
    if (marks==null || marks<=0 || isNaN(+marks)) {
        console.log(`Invalid input: ${marks} ,Please Provide the valid marks`);
    } else {
        ;
        if (marks>=90){
            console.log(`Funtastic Marks: ${marks},your Grade is A+`);
        }
        else{
            if (marks>=75 && marks<90) {
                console.log(`Excellent Marks: ${marks},Your Grade is A`);
            } 
            else {
                if (marks>=50 && marks<75) {
                    console.log(`Good Marks: ${marks},Your Grade is B`);  
                    
                } else {
                    if (marks>=35 && marks<50) {
                        console.log(` Marks is : ${marks},Your Grade is c,Need Improvement`); 
                    } else {
                        if (marks<35) {
                            console.log(`Marks is: $ {marks},Fail, score is not satisfactory need more improvement`); 
                        }
                        
                    }
                    
                }
                
            }
        }
    }
}


gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150); 
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation('Eighty');
gradeCalculation();
gradeCalculation(null)
