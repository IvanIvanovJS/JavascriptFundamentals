function printAndSum(startNum,endNum){
    let buff = ``;
    let sum = 0;
    for(let i = startNum; i <= endNum; i++){
        buff += i + ` `;
        sum += i;
    }
    console.log(buff);
    
    console.log(`Sum: ${sum}`);
    
}
printAndSum(0, 26)