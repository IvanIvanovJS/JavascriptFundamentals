/*•	Every second lost game, his helmet is broken.
•	Every third lost game, his sword is broken.
•	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
•	Every second time, when his shield brakes, his armor also needs to be repaired. 
 */
function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let expenses = 0;
    let shieldBreakCount = 0;
    for(let currentLostCount = 1; currentLostCount <= lostFightsCount; currentLostCount++){
        if (currentLostCount % 2 === 0){
            expenses += helmetPrice;
        }
        if(currentLostCount % 3 === 0){
            expenses += swordPrice;
        }
        if(currentLostCount % 6 === 0){
            expenses += shieldPrice;
            shieldBreakCount++;
        }
        if(shieldBreakCount === 2){
            expenses += armorPrice;
            shieldBreakCount = 0;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
    
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    
    )