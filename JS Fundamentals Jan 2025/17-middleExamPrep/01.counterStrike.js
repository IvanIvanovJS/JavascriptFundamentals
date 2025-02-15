function counterStrike(arr){
    let healthPoints = +arr.shift();
    let battlesWon = 0;
    

    let index = 0;
    let command = arr[index];
    while (command !== `End of battle`){
        let distance = +command;
        if(distance > healthPoints){
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${healthPoints} energy`);
            return;
        } else {
            healthPoints -= distance;
            battlesWon++;
            
        }
        
        if(battlesWon % 3 === 0){
            healthPoints += battlesWon;
            
        }
        index++;
        command = arr[index];

    }
    console.log(`Won battles: ${battlesWon}. Energy left: ${healthPoints}`);
    
}
counterStrike((["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])
    
    )