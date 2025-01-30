function signCheck(num1,num2,num3){
    let arrOfNums = [num1,num2,num3]
    let negativeCount = 0
    for(let num of arrOfNums){
        if( num === 0){
            console.log(`Positive`);
            return;
        }else if(num < 0){
            negativeCount++
        }
        
    }
    console.log(negativeCount % 2 === 0 ? `Positive` : `Negative`);
    
}
signCheck(-5,0,2
    )