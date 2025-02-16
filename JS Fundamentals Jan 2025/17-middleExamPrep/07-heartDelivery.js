function heartDelivery(arr){
    let houseIndices = arr.shift().split(`@`);
    
    
        
        let tokens = arr.shift().split(` `);
        let command = tokens.shift();
        let jump = +tokens.shift();
        let currentJump = 0;
        while(command !== `Love!`){
            
            currentJump += jump;
            
            if(currentJump >= houseIndices.length){
                currentJump = 0;
            }
            
            if(houseIndices[currentJump] > 0){
                houseIndices[currentJump] -= 2
                if(houseIndices[currentJump] === 0){
                    console.log(`Place ${currentJump} has Valentine's day.`);
                }
                
            } else if (houseIndices[currentJump] === 0){
                console.log(`Place ${currentJump} already had Valentine's day.`);
                
            }
            tokens = arr.shift().split(` `);
            command = tokens.shift();
            jump = +tokens.shift();
        }
    
    houseIndices = houseIndices.filter(el => el !== 0)
    console.log(`Cupid's last position was ${currentJump}.`);
        if(houseIndices.length === 0){
            console.log(`Mission was successful.`);
            
            
        }else {
            console.log(`Cupid has failed ${houseIndices.length} places.`);
            
        }
    
    
}
heartDelivery((["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
    
    )