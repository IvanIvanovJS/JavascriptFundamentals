/**Write a function, which receives two string arrays and merges them into a third array.  
•	If the index of the element is even, add into the third array the sum of both elements at that index
•	If the index of the element is odd, add the concatenation of both elements at that index
 */
function mergeArrays(arr1, arr2) {
    let finalArray = [];
    for(let i = 0; i < arr1.length; i++){
        let finalElement;
        if(i % 2 === 0){
            let element1 = Number(arr1[i])
            let element2 = Number(arr2[i])
            finalElement = element1 + element2;
            finalArray.push(finalElement);
        }else{
            finalElement = arr1[i] + arr2[i];
            finalArray.push(finalElement);
        }
    }
    
    console.log(finalArray.join(` - `));
    
}
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44'])