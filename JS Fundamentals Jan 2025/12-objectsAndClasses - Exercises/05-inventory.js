function inventory(arr){
    let result = [];
    for(let heroInfo of arr){
        let [heroName, heroLevel, heroItems] = heroInfo.split(` / `);
        let heroObj = {
            name: heroName,
            level: Number(heroLevel),
            items: heroItems
        }
        
        result.push(heroObj);

    }
    result.sort((a,b) => a.level - b.level)
    for(let heroInfo of result){
        console.log(`Hero: ${heroInfo.name}`);
        console.log(`level => ${heroInfo.level}`);
        console.log(`items => ${heroInfo.items}`);
        
        
    }
    
    

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )