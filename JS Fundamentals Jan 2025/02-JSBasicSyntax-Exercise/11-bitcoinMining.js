function bitcoinMining(arr){
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let dayOfPurchase = 0;
    let moneyEarned = 0;
    let dayCounter = 0;
    let bought = false;
    let dayForPurchase = 0;
    for(i = 0; i < arr.length; i++){
        dayCounter++;
        dayOfPurchase ++;
        if(dayCounter === 3){
            moneyEarned += arr[i] * goldPrice * 0.7;
            dayCounter = 0;
        }else{
            moneyEarned += arr[i] * goldPrice;
        }
        if(moneyEarned >= bitcoinPrice & bought === false){
            dayForPurchase = dayOfPurchase;
            bought = true;
        }

    }
    let boughtBitcoins = Math.floor(moneyEarned / bitcoinPrice);
    let moneyLeft = moneyEarned - boughtBitcoins * bitcoinPrice;
    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if(bought){
        console.log(`Day of the first purchased bitcoin: ${dayForPurchase}`);
        
    }
    console.log(`Left money: ${moneyLeft.toFixed(2  )} lv.`);
    
    
}
bitcoinMining([3124.15, 504.212, 2511.124]) 