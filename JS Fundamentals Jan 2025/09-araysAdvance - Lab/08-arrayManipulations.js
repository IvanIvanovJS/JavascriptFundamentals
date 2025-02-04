function arrayManipulations(arr){

    let currentArr = arr.shift().split(` `).map(Number);
    for(let i = 0; i < arr.length; i++){
        let tokens = arr[i].split(` `);
        let command = tokens.shift();
        let numberOrIndex = tokens.map(Number);
        let number = numberOrIndex.shift();
        
        let index = numberOrIndex.pop();
        
        if(command === `Add`){
            currentArr.push(number)
        }else if(command === `Remove`){
            currentArr = currentArr.filter(x => x !== number)
        }else if(command === `RemoveAt`){
            currentArr.splice(number,1)
        }else if(command === `Insert`){
            currentArr.splice(index,0,number)
        }
        
        
        
        
        
        
    }
    console.log(currentArr.join(` `));
    
    
    
    
    
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
    )