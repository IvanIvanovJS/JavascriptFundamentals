function burgerBus(arr) {
    let citysVisited = +arr.shift();
    let citysCount = 1;
    let totalProfit = 0;
    for (let i = 1; i <= citysVisited; i++) {

        let cityName = arr.shift();
        let earnedMoney = +arr.shift();
        let expenses = +arr.shift();
        
        
        if (citysCount % 5 === 0) {
            earnedMoney *= 0.9;
        } else if (citysCount % 3 === 0){
            expenses *= 1.5;
        }

        let cityProfit = earnedMoney - expenses;
        totalProfit += cityProfit
        console.log(`In ${cityName} Burger Bus earned ${cityProfit.toFixed(2)} leva.`);

        citysCount++;
    }
   
        console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
    
    


}
burgerBus((["15",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20", "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20", "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"])

)