function townInfo(townName, population, area){
    let townNameValid = townName.length >= 3;
    let populationValid = population >= 0;
    let areaValid = area >= 0;
    if(!townNameValid){
        console.log(`Town name must be at least 3 characters!`);
        
    }
    if(!populationValid){
        console.log(`Population must be a positive number!`);
        
    }
    if(!areaValid){
        console.log(`Area must be a positive number!`);
        
    }
    if(townNameValid & populationValid & areaValid){
        console.log(`Town ${townName} has population of ${population} and area ${area} square km.`);
        
    }
    
}
townInfo('Ka',
3600,
-50


)