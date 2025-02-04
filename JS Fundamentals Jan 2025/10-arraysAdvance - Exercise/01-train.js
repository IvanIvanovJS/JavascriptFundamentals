function sortingTrain(arr) {
    let workingArr = arr;
    let trainState = workingArr.shift().split(` `).map(Number);
    let maxCapacity = +workingArr.shift();
    
    
    for (let i = 0; i < workingArr.length; i++){
        let command = workingArr[i].split(` `);
        let cmdInfo = command[0]
        if(cmdInfo === `Add`){
            let secondCmd = +command[1];
            trainState.push(secondCmd);
        }else{
            cmdInfo = Number(cmdInfo);
            for(let j = 0; j < trainState.length; j++){
                if((trainState[j] + cmdInfo) <= maxCapacity){
                    trainState[j] += cmdInfo;
                    break;
                }
            }
        }
    }
    console.log(trainState.join(` `));
    
    
}
sortingTrain(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)