function sortedBy(arr){
    arr.sort((a,b) => {
    let lengthDiffernce = a.length - b.length;

    if(lengthDiffernce !== 0){
        return lengthDiffernce;
    } else {
        return a.localeCompare(b);
    }
    
    
    });
    console.log(arr.join(`\n`));
    
}
sortedBy(['alpha', 'abeta', 'gamma'])