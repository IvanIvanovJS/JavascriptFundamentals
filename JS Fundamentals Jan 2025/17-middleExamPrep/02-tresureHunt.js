function tresureHumt(arr) {
    let initialChestLoot = arr.shift().split(`|`);

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].split(` `);
        let command = element.shift();


        if (command === `Loot`) {
            for (let tresure of element) {
                if (!(initialChestLoot.includes(tresure))) {
                    initialChestLoot.unshift(tresure);
                }
            }
        } else if (command === `Drop`) {
            let index = element[0]
            if (index < initialChestLoot.length) {
                let dropedTresure = initialChestLoot.splice(index, 1).join(``)
                initialChestLoot.push(dropedTresure);
            }

        } else if (command === `Steal`){
            let numberOfItems = element[0];
            if(numberOfItems < initialChestLoot.length){
               let stolenItems = initialChestLoot
               .slice((initialChestLoot.length - numberOfItems));
               initialChestLoot = initialChestLoot.filter(el => !stolenItems.includes(el));
               stolenItems = stolenItems.join(`, `)
               console.log(stolenItems);
               
            } else {
                let stolenItems = initialChestLoot.slice(0)
                    .join(`, `);
                console.log(stolenItems);
                initialChestLoot = [];
                
            } 
        } else if (command === `Yohoho`){
            break;
        }


    }
    let finalRecord = 0;
    if(initialChestLoot.length > 0){
        for (let element of initialChestLoot) {
            let piratePoints = element.length;
            finalRecord += piratePoints;
            
        }
        finalRecord /= initialChestLoot.length
        console.log(`Average treasure gain: ${finalRecord.toFixed(2)} pirate credits.`);
        
    }else {
        console.log(`Failed treasure hunt.`);
        
    }

}



tresureHumt((["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 1",
    "Yohoho!"])
    
)