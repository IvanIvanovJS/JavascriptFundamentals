function echoType(example){
    if(typeof(example) === `string` || typeof(example) === `number`){
        console.log(typeof(example));
        console.log(example);
    }else{
        console.log(typeof(example));
        console.log(`Parameter is not suitable for printing`);
        
    }
    
    
}
echoType({})