function sumOfNumbers(num){
    let counter = 1;
    let totalSum = 0;
    let currentNum = 1;
    for(counter = 1; counter <= num; counter++){
        totalSum += currentNum    
        if(currentNum % 2 === 1){
                console.log(currentNum);
                
            }
            
            currentNum += 2;

    }
    console.log(`Sum: ${totalSum}`);
    
}
sumOfNumbers(21)