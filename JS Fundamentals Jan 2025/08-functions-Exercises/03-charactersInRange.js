function charactersInRange(char1, char2){

   let charInAscii1 = char1.charCodeAt();
   let charInAscii2 = char2.charCodeAt();
   
   if(charInAscii1 > charInAscii2){
    [charInAscii1, charInAscii2] = [charInAscii2, charInAscii1];
   }
   let result = [];
   for(let currentValue = charInAscii1 + 1; currentValue < charInAscii2; currentValue++){
    let printChar = String.fromCharCode(currentValue);
    result.push(printChar);
    
   }
   console.log(result.join(" "));
   
   
}
charactersInRange('a','d')