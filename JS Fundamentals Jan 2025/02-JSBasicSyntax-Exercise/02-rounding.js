function rounding(num, precision){
    if(precision > 15){
        precision = 15;
    }
   console.log(parseFloat(num.toFixed(precision)));
   
    
    
}
rounding(10.5,3)