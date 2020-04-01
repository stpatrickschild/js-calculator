
function calculator(pram){
  if(pram.operation === 'add'){
    return pram.num1 + pram.num2
  }
  if(pram.operation === '+'){
    return pram.num1 + pram.num2
  }

  if(pram.operation === 'substract'){
    return pram.num1 - pram.num2
  }
  if(pram.operation === '-'){
    return pram.num1 - pram.num2
  }

  if(pram.operation === 'multiply'){
    return pram.num1 * pram.num2
  }
  if(pram.operation === '*'){
    return pram.num1 * pram.num2
  }

  if(pram.operation === 'division'){
    return pram.num1 / pram.num2
  }
  if(pram.operation === '/'){
    return pram.num1 / pram.num2
  }

  if(pram.operation === '%'){
    return pram.num1 % pram.num2
  }
  
}

  
const AdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add' 
}
console.log(calculator(AdditionInput))
const plusInput = {
  num1: 9,
  num2: 5,
  operation: '+' 
}
console.log(calculator(plusInput) === 14)

const subtractionInput = {
  num1: 3,
  num2: 5,
  operation: 'substract' 
}
console.log(calculator(subtractionInput));
const minusInput = {
  num1: 20,
  num2: 12,
  operation: '-'
}
console.log(calculator(minusInput));

const multipicationInput = {
  num1: 8,
  num2: 4,
  operation: 'multiply'
}
console.log(calculator(multipicationInput))
const timesInput = {
  num1: 5,
  num2: 6, 
  operation: '*'
}
console.log(calculator(timesInput))

const divisionInput = {
  num1: 6,
  num2: 36,
  operation: 'divide'
}
console.log(calculator(divisionInput))
const divideInput = {
  num1: 9, 
  num2: 81,
  operation: '/'
}
console.log(calculator(divideInput))

const modulo = {
  num1: 40,
  num2: 10,
  operation: '%'
}
console.log(calculator(modulo) === 0);



/*
let num1 = 10;
let num2 = 5;

let addition = num1 + num2;
let subtraction = num1 - num2;
let division = num1 / num2;
let multipication = num1 * num2;

console.log(addtion); // -> 15
console.log(subtration); // -> 5
console.log(division); // -> 2
console.log(multiplicaiton); // -> 

another eg: console.log(5 % 2); //->1

note: you can add string, but not sub, div, mul, or do module -> NaN
*/

