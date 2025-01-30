function amazingNumbers(num){
    let numAsString = String(num);
    let sum = 0;
    for(i = 0; i < numAsString.length; i++){
        sum += Number(numAsString[i]);
    }
    let result = sum.toString().includes(`9`);

    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
    
}
amazingNumbers(135)