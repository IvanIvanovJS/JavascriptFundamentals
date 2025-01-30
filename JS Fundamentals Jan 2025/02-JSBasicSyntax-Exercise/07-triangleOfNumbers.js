function triangleOfNumbers(num){
    let buff = ``;
    for(let i = 1; i <= num; i++){
        for(k = 1; k<= i; k++){
            buff += `${i} `;
            
        }
        
        buff += `\n`
    }
    
    console.log(buff);
    
    
}
triangleOfNumbers(20)