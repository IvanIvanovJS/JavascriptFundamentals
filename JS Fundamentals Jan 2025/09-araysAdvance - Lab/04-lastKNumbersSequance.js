function lastKNumbersSequance(n, k){
    let result = [1];
    while(result.length < n){
        let sum = 0;
        let lastKNums = result.slice(-k);

        for( num of lastKNums){
            sum += num;
            
        }
        result.push(sum)
    }
    console.log(result.join(` `));
    
}
lastKNumbersSequance(20, 2)
