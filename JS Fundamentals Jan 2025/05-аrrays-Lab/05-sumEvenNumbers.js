function sumEvenNumbers(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        let arrNum = Number(arr[i]);
        if(arrNum % 2 === 0){
            sum += arrNum;
        }
    }
    console.log(sum);
    
}
sumEvenNumbers(['2','4','6','8','10'])