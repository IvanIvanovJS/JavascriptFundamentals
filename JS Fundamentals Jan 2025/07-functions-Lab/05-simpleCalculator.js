function simpleCalculator(num1, num2, operator){
let multiply = (num1, num2) => console.log(num1 * num2);
let divide = (num1, num2) => console.log(num1 / num2);
let add = (num1, num2) => console.log(num1 + num2);
let subtract = (num1, num2) => console.log(num1 - num2);

switch(operator){
    case `multiply`: multiply(num1, num2); break;
    case `divide`: divide(num1, num2); break;
    case `add`: add(num1, num2); break;
    case `subtract`: subtract(num1, num2);break;
}




}
simpleCalculator(5, 5, 'multiply')