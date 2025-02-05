function buildingWall(arr){
    arr = arr.map(Number);
    
    let daily = [];
    let sum = 0;
    if(arr.includes(30)){
        let index = arr.indexOf(30);
            arr.splice(index,1);
    }
    while(arr.length > 0){
        arr = arr.map(x => x + 1);
        let cubicMetersPerDay = arr.length * 195;
        daily.push(cubicMetersPerDay)
        sum += cubicMetersPerDay * 1900;
        while(arr.includes(30)){
            let index = arr.indexOf(30);
            arr.splice(index,1);
        }
    }
    console.log(daily.join(`, `));
    console.log(sum + ` ` + `pesos`);
    
    
}
buildingWall([17, 22, 17, 19, 17])