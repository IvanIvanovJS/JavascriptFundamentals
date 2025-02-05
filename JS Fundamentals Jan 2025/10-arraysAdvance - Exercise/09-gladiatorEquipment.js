function gladiatorEquipment(arr){
    let inventory = arr[0].split(` `);
    for(let i = 1; i < arr.length; i++){
        let cmdInfo = arr[i].split(` `);
        let command = cmdInfo[0].toLowerCase();
        let item = cmdInfo[1];
        if(command === `buy`){
            if(!inventory.includes(item)){
                inventory.push(item)
            }
        }else if (command === `trash`){
            if(inventory.includes(item)){
                inventory.splice(inventory.indexOf(item),1)
            }
        }else if (command === `repair`){
            if(inventory.includes(item)){
                let repairedItem = inventory.splice(inventory.indexOf(item),1).join(``);
                inventory.push(repairedItem);
            }
        }else if (command === `upgrade`){
            let upgrade = item.split(`-`);
            if(inventory.includes(upgrade[0])){
                inventory.splice(inventory.indexOf(upgrade[0]) + 1,0,`${upgrade[0]}:${upgrade[1]}`)
            }
        }
    }
    console.log(inventory.join(` `));
    
}
gladiatorEquipment(['SWORD Helmet Shield Spear ',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
    );