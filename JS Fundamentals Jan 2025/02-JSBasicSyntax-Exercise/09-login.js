function login(arr){
    let userName = arr[0];
    let attempts = 0;
    let passwordLength = userName.length;
    let passwordSaved = ``;
    let isLogged = true;
    for(i = passwordLength;i >= 1; i--){
        let currentChar = userName[i-1];
        passwordSaved += currentChar
    }
    let index = 1;
    let command = arr[index];
    index++;
    
    while(command != passwordSaved){
        attempts++;
        if(attempts === 4){
            console.log(`User ${userName} blocked!`);
            isLogged = false;
            return;
        }
        
        console.log(`Incorrect password. Try again.`);
        
        command = arr[index];
        index++;
    }
    if(isLogged){
        console.log(`User ${userName} logged in.`);
        
    }
    
}
login(['Acer','login','go','let me in','recA'])
