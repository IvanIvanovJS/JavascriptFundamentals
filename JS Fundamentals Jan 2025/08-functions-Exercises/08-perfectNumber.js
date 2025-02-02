function checkProperDevisor(num){
    let sumOfDevisors = 0;
    for(let i = 1; i < num; i++){
        
        if(num % i === 0){
            sumOfDevisors += i;
        }
    }
    if(num === sumOfDevisors){
        console.log(`We have a perfect number!`);
        
    }else{
        console.log(`It's not so perfect.`);
        
    }
}
checkProperDevisor(8128)