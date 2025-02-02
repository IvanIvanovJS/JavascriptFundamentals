function loadingBar (num){
    if(num === 100){
        console.log(`${num}% Complete!`);
        console.log(`[%%%%%%%%%%]`);
        
    }else{
        let currChar = "";
        let i = 0;
        for(i; i < num; i += 10){
            currChar += "%"
        }
        let dotChar = "";
        for(k = i; k < 100; k += 10){
            dotChar += "."
        }
       console.log(`${num}% [${currChar}${dotChar}]`);
       
        console.log(`Still loading...`);
        
    }
}
loadingBar(90)