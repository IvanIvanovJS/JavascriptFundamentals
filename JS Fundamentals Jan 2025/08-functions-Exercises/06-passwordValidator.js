function passwordValidator(passwordAsString){
   
    
    function checkInputLength(pass){
        if(pass.length >= 6 && pass.length <= 10){
           return true;
        }else{
            console.log("Password must be between 6 and 10 characters");
           return false;
        }
    }
    function checkInputAlphanumeric(pass){
        let pattern = /^[A-Za-z0-9]+$/
        if(pattern.test(pass)){
            return true;
        }else{
            console.log("Password must consist only of letters and digits");
            return false;
        }
    }
    function checkInputAtleastTwoDigits(pass){
        let pattern = /[0-9]{2,}/;
        if(pattern.test(pass)){
            return true;
        }else{
            console.log("Password must have at least 2 digits");
            return false;
        }
        
    }
    let isValidLength = checkInputLength(passwordAsString);
    let isValidAlphanumeric = checkInputAlphanumeric(passwordAsString);
    let isValidTwoDigits = checkInputAtleastTwoDigits(passwordAsString);
    if(isValidLength && isValidAlphanumeric && isValidTwoDigits){
        console.log("Password is valid");
        
    }
    
    
}
passwordValidator('logIn')