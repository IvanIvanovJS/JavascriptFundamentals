function inventory (arr){
    let backpack = arr.shift().split(`, `);
    for (let element of arr) {
        let [command, item] = element.split(` - `)
        
        switch (command){
            case `Collect`: if(!backpack.includes(item)){
                backpack.push(item);
            }
                break;
            case `Drop`: if(backpack.includes(item)){
                backpack.splice(backpack.indexOf(item),1);
            }
                break;
            case `Combine Items`: item = item.split(`:`);
                 if(backpack.includes(item[0])){
                backpack.splice(backpack.indexOf(item[0]) + 1,0,item[1]);
            }
                break;
            case `Renew`: if(backpack.includes(item)){
                let splicedItem = backpack.splice(backpack.indexOf(item),1).join(``);
                backpack.push(splicedItem)
            }
                break;
            default:
                break;

        }
    }
    backpack = backpack.join(`, `)
    console.log(backpack);
    
    
}
inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]
  
  )