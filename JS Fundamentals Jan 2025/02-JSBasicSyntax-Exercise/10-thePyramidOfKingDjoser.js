function pyramidDjoser(pyramidBase, increment){
    let lapisLazuliCounter = 0;
    let goldUsed = 0;
    let lapisLazuliUsed = 0;
    let marbleUsed = 0;
    let stoneUsed = 0;
    let floorCounter = 0;
    for(i = pyramidBase; i >= 1; i-=2){
        lapisLazuliCounter ++;
        floorCounter++;
        if(i === 1 || i === 2){
            goldUsed = i * i * increment;
        }else if (lapisLazuliCounter === 5){
            lapisLazuliUsed += (i * 4 - 4) * increment;
            stoneUsed += ((i - 2) * (i - 2)) * increment;
            lapisLazuliCounter = 0;
        }else {
            marbleUsed += (i * 4 - 4) * increment;
            stoneUsed += ((i - 2) * (i - 2)) * increment;
        }
    }
    console.log(`Stone required: ${Math.ceil(stoneUsed)}`);
    console.log(`Marble required: ${Math.ceil(marbleUsed)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliUsed)}`);
    console.log(`Gold required: ${Math.ceil(goldUsed)}`);
    console.log(`Final pyramid height: ${Math.floor(floorCounter * increment)}`);
    
}
pyramidDjoser(23,
    0.5
    
    
    )