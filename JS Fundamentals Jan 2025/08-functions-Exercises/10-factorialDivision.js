function factorialDivision(num1, num2){
    let division = factorialSum(num1) / factorialSum(num2);
    function factorialSum (num){
        let result = num
        for(let i = 1; i < num; i++){
            result *= i;
        }
        return result;
        
    }
    console.log(division.toFixed(2));
    
}
factorialDivision(6,2)