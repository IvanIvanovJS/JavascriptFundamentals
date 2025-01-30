function reverseAnArray(num, arr){
    
    let result = [];
    for(let i = 0; i < num; i++){
         result.push(arr[i])
    }
    
    console.log(result.reverse().join(" "));
    
    
}
reverseAnArray(3, [10, 20, 30, 40, 50])
reverseAnArray(2, [66, 43, 75, 89, 47])