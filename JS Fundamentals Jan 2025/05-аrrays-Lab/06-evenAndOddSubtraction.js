function substraction(arr){
    let sumEven = 0;
    let sumOdd = 0;
    for(let i = 0; i < arr.length; i++){
        let numOfArr = Number(arr[i]);
        numOfArr % 2 === 0 ? sumEven += numOfArr : sumOdd += numOfArr;
    }
    let result = sumEven - sumOdd;
    console.log(result);
    
}
substraction([3,5,7,9])