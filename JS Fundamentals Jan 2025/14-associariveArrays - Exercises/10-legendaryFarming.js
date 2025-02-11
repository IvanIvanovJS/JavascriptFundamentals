function legendaryFarming(str) {
    let arr = str
        .split(` `);
    let rareMatirials = {}
    let junk = {};
    rareMatirials[`fragments`] = 0;
    rareMatirials[`motes`] = 0;
    rareMatirials[`shards`] = 0;
    let isObtained = false;
    for (let i = 0; i < arr.length; i += 2) {
        if(isObtained){
            break;
        }
        let quantity = +arr[i];
        let matirial = arr[i + 1].toLowerCase();
        if (matirial === `fragments` || matirial === `motes` || matirial === `shards`) {

            if (matirial in rareMatirials) {
                rareMatirials[matirial] += quantity
            }
            if (rareMatirials[`fragments`] >= 250) {
                rareMatirials[`fragments`] -= 250;
                console.log(`Valanyr obtained!`);
                isObtained = true;

            } else if (rareMatirials[`motes`] >= 250) {
                rareMatirials[`motes`] -= 250;
                console.log(`Dragonwrath obtained!`);
                isObtained = true;
            } else if (rareMatirials[`shards`] >= 250) {
                rareMatirials[`shards`] -= 250;
                console.log(`Shadowmourne obtained!`);
                isObtained = true;
            }
        } else {
            if (matirial in junk) {
                junk[matirial] += quantity;
            } else {
                junk[matirial] = quantity;
            }
        }


    }
    let sortedMatirials = Object
        .entries(rareMatirials)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let sortedJunk = Object
        .entries(junk)
        .sort((a,b) => a[0].localeCompare(b[0]));
        for (let [matirial, quantity] of sortedMatirials) {
            console.log(`${matirial}: ${quantity}`);
            
        }
        for (let [matirial, quantity] of sortedJunk) {
            console.log(`${matirial}: ${quantity}`);
        }


}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')