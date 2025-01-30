function sumDigits (num){
    let numAsStr = String(num);
    let sum = 0;
    for(i = 0; i < numAsStr.length; i++){
        let didigt = Number(numAsStr[i]);
        sum += didigt;
    }
    console.log(sum);
    
}
sumDigits(245678)