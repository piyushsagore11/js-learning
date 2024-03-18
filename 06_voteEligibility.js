var voteEligible=function(ageOfVote) {
    if (ageOfVote==0 || ageOfVote>=130 || ageOfVote<0 || ageOfVote==null) {
        console.log(`age: ${ageOfVote} , invalid Data`);
        
    } else {
        if (ageOfVote>=18) {
            console.log(`age: ${ageOfVote} , Eligible for Vote`);
            
        } else {
            if (ageOfVote<18) {
                console.log(`age: ${ageOfVote} , Not Eliglible For Vote`);
                
            }
            
        }
    }
    
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);
