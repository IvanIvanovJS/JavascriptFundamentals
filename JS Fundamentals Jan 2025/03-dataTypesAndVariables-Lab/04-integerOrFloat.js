function integerOrFloat(num1, num2, num3){
    let sum = num1 + num2 + num3;
    let result = sum % 1 === 0 ? `${sum} - Integer` : `${sum} - Float`
    console.log(result);
    
}
integerOrFloat(100, 200, 303)