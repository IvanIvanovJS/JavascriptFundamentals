function reverseInPlace(arr){
    
    for(let i = 0; i < arr.length / 2; i++){
        let currentElement = arr[i]
        let lastElement = arr[arr.length - 1 - i];
        arr[i] = lastElement;
        arr[arr.length - 1 - i] = currentElement;
        
    }
    
    console.log(arr.join(` `));
    
    

}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])