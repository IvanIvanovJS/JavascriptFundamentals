function shiftingElementsOfArray(numbers, counting) {
  
  counting = counting % numbers.length;
  let shiftedPart = numbers.splice(0, counting);
  numbers.push(...shiftedPart);
    console.log(numbers);
  
}
shiftingElementsOfArray([2,3,9,4], 6)