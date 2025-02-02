function addAndSubtract(num1, num2, num3){

    let tempResult = sum(num1, num2);
    let result = subtract(tempResult, num3);
    console.log(result);
    
    function sum(num1,num2){
        return num1 + num2;
    }

    function subtract(num1, num2){
        return num1 - num2;
    }

    

}
addAndSubtract(23, 6, 10)