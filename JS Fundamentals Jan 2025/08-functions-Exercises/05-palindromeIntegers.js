function palindromeIntegers(arr) {
    let arrInString = arrToArrAsString(arr);
    
    reversingElementsOfArr(arrInString);
    
    
    function arrToArrAsString(arr){
        let arrAsElementsOfString = [];
        for(let i = 0; i < arr.length; i++){
            let elementAsString = arr[i] + "";
            arrAsElementsOfString.push(elementAsString)
        }
        return arrAsElementsOfString;
    }
    
    function reversingElementsOfArr(arrInStr){
        for(let i = 0; i < arrInStr.length; i++){
            let element = arrInStr[i];
            let elementReversed = element.split(``).reverse().join(``);
            console.log(element === elementReversed);
            
        }
    }

}
palindromeIntegers([32,2,232,1010])
