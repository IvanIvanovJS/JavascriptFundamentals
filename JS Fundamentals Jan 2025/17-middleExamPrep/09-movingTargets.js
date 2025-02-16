function movingTargets(arr){
    let shootingTargets = arr.shift().split(` `).map(Number);

    let [command, ...rest] = arr.shift().split(` `);
    
    while(command != `End`){
        if(command === `Shoot`){
            let [index, value] = rest.map(Number);
            if(index < shootingTargets.length){
                
                shootingTargets[index] -= value;
                if(shootingTargets[index] <= 0){
                    shootingTargets.splice(shootingTargets.indexOf(shootingTargets[index]),1)
                } 
                
            }
        }


        [command, ...rest] = arr.shift().split(` `);
    }
    

    
}
movingTargets((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
    )