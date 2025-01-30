function vacation(peopleCount, groupType, day){
  
   let finalPrice = 0;
   switch(groupType){
    case `Students`:
        if(day === `Friday`){
            finalPrice = 8.45 * peopleCount;
        }else if(day === `Saturday`){
            finalPrice = 9.8 * peopleCount;
        }else {
            finalPrice = 10.46 * peopleCount;
        }
        if(peopleCount >= 30){
            finalPrice *= 0.85;
        }
        break;
    case `Business`:
        if(peopleCount >= 100){
            peopleCount -= 10;
         }
        if(day === `Friday`){
            finalPrice = 10.9 * peopleCount;
        }else if(day === `Saturday`){
            finalPrice = 15.6 * peopleCount;
        }else {
            finalPrice = 16 * peopleCount;
        }
        
        break;
    case `Regular`:
        if(day === `Friday`){
            finalPrice = 15 * peopleCount;
        }else if(day === `Saturday`){
            finalPrice = 20 * peopleCount;
        }else {
            finalPrice = 22.5 * peopleCount;
        }
        if(peopleCount >= 10 & peopleCount <= 20){
            finalPrice *= 0.95;
        }
        break;
   }
   
   console.log(`Total price: ${finalPrice.toFixed(2)}`);
   
   
}
vacation(100,
    "Business",
    "Saturday"
    
    )