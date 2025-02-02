function reversingElementsOfArr(arrInStr){
    for(let i = 0; i < arrInStr; i++){
        let element = arrInStr[i];
        let elementReversed = element.split().reverse().join();
        return element === elementReversed
    }
}
reversingElementsOfArr([`123`, `323`, `421`, `121`])