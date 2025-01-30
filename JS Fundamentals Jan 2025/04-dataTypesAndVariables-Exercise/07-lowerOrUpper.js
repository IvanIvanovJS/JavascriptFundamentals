function lowerOrUpperCase(char){
    let upperCase = char === char.toUpperCase()
    if(upperCase){
        console.log(`upper-case`);
        
    }else{
        console.log(`lower-case`);
        
    }
    
}
lowerOrUpperCase(`a`)