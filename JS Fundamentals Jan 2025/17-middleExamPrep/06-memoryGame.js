function memoryGame(arr){
    let sequence = arr.shift()
        .split(` `);
    let movesCounter = 0;
    for (let command of arr ) {
        
        if(command === `end`){
            break;
        }
        movesCounter++;
        let [index1, index2] = command.split(` `);
        if(index1 === index2 || index1 < 0 || index1 >= sequence.length || index2 < 0 || index2 >= sequence.length){
            sequence.splice((sequence.length / 2),0,"-" + movesCounter + `a`);
            sequence.splice((sequence.length / 2),0,"-" + movesCounter + `a`);
            console.log(`Invalid input! Adding additional elements to the board`);
        }else if(sequence[index1] === sequence[index2]){
            let num1 = sequence[index1]
            sequence = sequence.filter(num => num != num1);
            console.log(`Congrats! You have found matching elements - ${num1}!`);
            

            
        }
        else if (sequence[index1] !== sequence[index2]){
            console.log(`Try again!`);
            continue;
        }
        if(sequence.length === 0){
            console.log(`You have won in ${movesCounter} turns!`);
            return;
        }
    }
    console.log(`Sorry you lose :(`);
    console.log(`${sequence.join(` `)}`);
    
    
}   
memoryGame(["a 2 4 a 2 4", 
"4 0", 
"0 2",
"0 1",
"0 1", 
"end"
]

    )