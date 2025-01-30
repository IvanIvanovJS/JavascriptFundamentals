function triplesOfLetters(num){
    
    for(i = 0; i < num; i++){
        let letterI = String.fromCharCode(97 + i);
        
        for(k = 0; k < num; k++){
            let letterK = String.fromCharCode(97 + k);
            
            for(n = 0; n < num; n++){
                let letterN = String.fromCharCode(97 + n);
                console.log(`${letterI}${letterK}${letterN}`);
                
                
                
                
            }
        }
    }
}
triplesOfLetters(4)