function guineaPig(arr){
    let [food, hay, cover, piggyWeight] = arr.map(Number);
        
    for(let i = 1; i <= 30; i++){    
        food -= 0.3;
        if(i % 2 === 0){
            hay -= (food * 5 / 100);}
        if(i % 3 === 0){
            cover -= 1/3 * piggyWeight;
        }
    }
    
    if(food > 0.1 && hay > 0 && cover > 0){
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
        
    } else {
        console.log(`Merry must go to the pet store!`);
        
    }
    
}
guineaPig((["9",
    "5",
    "5.2",
    "1"])
    
    )