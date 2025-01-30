/*Write a function, which prints all unique pairs in an array of integers 
whose sum is equal to a given number.  */
function magicSum(arr, givenNum){
    for(let i = 0; i < arr.length; i++){
        let currentElement = arr[i];
        for(k = i + 1; k < arr.length; k++){
            let secondEelement = arr[k];
            if((currentElement + secondEelement) === givenNum){
                console.log(`${currentElement} ${secondEelement}`);
                
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27)