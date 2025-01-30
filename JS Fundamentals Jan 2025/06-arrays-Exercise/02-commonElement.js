/*Write a function, which prints common elements in two string arrays. 
Print all matches on separate lines. Compare the first array with the second array. */
function commonElement(arr1, arr2) {
   
    for (let i = 0; i < arr1.length; i++) {
        let element1 = arr1[i];
        for (let k = 0; k < arr2.length; k++){
            let element2 = arr2[k];
            if(element1 === element2){
                console.log(element1);
                
            }
            
        }
    }
}
commonElement(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])
