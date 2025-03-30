function numbers(arr){
    let sequence = arr.shift().split(` `).map(Number);
    
    
   for (let element of arr) {
        element = element.split(` `);
        let command = element[0];
        let value = Number(element[1]);
        let newValue = Number(element[2])
    if (command === `Finish`){
        break;
    }else if(command === `Add`){
        sequence.push(value)
    }else if(command === `Remove`){
        let index = sequence.indexOf(value);
        if (index !== -1){
            sequence.splice(index,1)
        }
        
    }else if(command === `Replace`){
        let index = sequence.indexOf(value);
        if (index !== -1){
            sequence[index] = newValue;
        }
        
    } else if (command === `Collapse`){
        sequence = sequence.filter(num => num >= value);
    }
   }
    
        
        
    
    console.log(sequence.join(` `));
    
}
numbers((["5 9 70 -56 9 9",
    "Replace 9 9",
    "Remove 9",
    "Finish"])
    
    
    
    )