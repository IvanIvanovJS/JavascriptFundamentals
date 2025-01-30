function specialNumbers(num){
    
    for(i = 1; i <= num; i++){
            let numAsString = i.toString();
            let result = 0;
            for(k = 0; k < numAsString.length; k++){
                
                result += Number(numAsString[k])
                
            }
            if(result === 5 || result === 7 || result === 11){
                console.log(`${numAsString} -> True`);
                
            }else{
                console.log(`${numAsString} -> False`);
            }
    }
}
specialNumbers(51
    
)