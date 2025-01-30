function spicesMustFlow(startingYield){
    let workersConsumed = 26;
    let totalYeild = 0;
    let daysCount = 0;
    for(let  availableYield = startingYield; availableYield >= 100; availableYield -= 10){
        
        daysCount++;
        totalYeild += availableYield;
        if (totalYeild >= workersConsumed) {
            totalYeild -= workersConsumed
        };

    }
    if(totalYeild > workersConsumed){
        totalYeild -= 26;
    }
    console.log(`${daysCount}`);
    console.log(`${totalYeild}`);
    
}
spicesMustFlow(1)
