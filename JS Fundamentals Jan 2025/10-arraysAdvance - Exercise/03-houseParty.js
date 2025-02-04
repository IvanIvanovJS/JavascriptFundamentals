function houseParty(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let command = arr[i];
        let cmdInfo = command.split(` `);
        let personName = cmdInfo[0];
        if(result.includes(personName) && !cmdInfo.includes(`not`)){
            console.log(`${personName} is already in the list!`);
            continue;
        }else if(result.includes(personName) && cmdInfo.includes(`not`)){
            let index = result.indexOf(personName);
            result.splice(index,1);
            continue;
        }
        if(!cmdInfo.includes(`not`)){
            result.push(personName);
        } else {
            console.log(`${personName} is not in the list!`);
            
        }
        
        
    }
    console.log(result.join(`\n`));
    
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
    )