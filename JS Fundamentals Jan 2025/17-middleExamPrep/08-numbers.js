function numbers  (str){
    let arr = str.split(` `);
    let totalSum = arr.map(Number).reduce((acc, num) => acc + num,0);
    let averageSum = totalSum / arr.length;
    let result = [];
    for (let num of arr) {
        if(num > averageSum){
            result.push(num);
        }
        
    }
    if(result.length === 0){
        console.log(`No`);
        
    } else {
        result = result.sort((a,b) => b - a).slice(0,5);
        console.log(result.join(` `));
    }
    
    
    
    
    
    
    
    
}
numbers(`5 2 3 4 -10 30 40 50 20 50 60 60 51`)