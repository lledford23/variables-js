const fullName = 'Lindsay'
const numberOfCupsOfCoffee = 3

let message = `I am ${fullName} and I drink ${numberOfCupsOfCoffee} cups of coffee daily, sadly..`

console.log(message)

let fullNewName = prompt('What is your name?')

let newMessage = `Nice to meet you ${fullNewName}!`
console.log(newMessage)

let firstOperand = prompt('What is your favorite number?')
let secondOperand = prompt('What is your second favorite number?')

parseFloat(firstOperand)
parseFloat(secondOperand)

let newMessageNumbers = `Wow, ${firstOperand} and ${secondOperand}.. nice!`
console.log(newMessageNumbers)

let sumOfNumbers = parseFloat(firstOperand) + parseFloat(secondOperand)
let sumMessage = `If you add ${firstOperand} and ${secondOperand} you'll get ${sumOfNumbers}`
console.log(sumMessage)

let differenceOfNumbers = parseFloat(secondOperand) - parseFloat(firstOperand)
let differenceMessage = `If you subtract ${secondOperand} from ${firstOperand} you'll get ${differenceOfNumbers}`
console.log(differenceMessage)

let productOfNumbers = parseFloat(firstOperand) * parseFloat(secondOperand)
let productMessage = `If you multiply ${firstOperand} and ${secondOperand} you'll get ${productOfNumbers}`
console.log(productMessage)

let quotientOfNumbers = parseFloat(firstOperand) / parseFloat(secondOperand)
let quotientMessage = `If you divide ${firstOperand} by ${secondOperand} you'll get ${quotientOfNumbers}`
console.log(quotientMessage)

let remainderOfNumbers = parseFloat(firstOperand) % parseFloat(secondOperand)
let remainderMessage = `If you want the remainder of ${firstOperand} and ${secondOperand} you'll get ${remainderOfNumbers}`
console.log(remainderMessage)

const numbersArray = [
  89,
  15,
  4,
  18,
  80,
  67,
  59,
  14,
  34,
  70,
  85,
  67,
  16,
  5,
  8,
  40,
  17,
  12,
  98,
  100,
  83,
  25,
  34,
  23,
  88,
  13,
  51,
  8,
  11,
  14,
  61,
  17,
  26,
  20,
  81,
  77,
  23,
  89,
  7,
  6,
  48,
  97,
  31,
  62,
  70,
  19,
  32,
  98,
  45,
  18,
  8,
  17,
  2,
  41,
  2,
  3,
  45,
  87,
  89,
  88,
  48,
  76,
  53,
  23,
  98,
  53,
  21,
  23,
  14,
  36,
  25,
  35,
  8,
  10,
  29,
  28,
  67,
  57,
  15,
  33,
  5,
  79,
  59,
  54,
  57,
  75,
  28,
  16,
  3,
  46,
  43,
  61,
  38,
  25,
  12,
  56,
  12,
  89,
  82,
  16,
]

let smallestNumber = numbersArray[0]

for (let index = 0; index < numbersArray.length; index++) {
  if (smallestNumber > numbersArray[index]) {
    smallestNumber = numbersArray[index]
  }
}
console.log(smallestNumber)

let largestNumber = numbersArray[0]

for (let index = 0; index < numbersArray.length; index++) {
  if (largestNumber < numbersArray[index]) {
    largestNumber = numbersArray[index]
  }
}
console.log(largestNumber)

let sum = 0
for (let index = 0; index < numbersArray.length; index++) {
  let currentElement = numbersArray[index]

  sum = sum + currentElement
}
console.log(sum)

let average = 0
for (let index = 0; index < numbersArray.length; index++) {
  let currentElement = numbersArray[index]
  sum = sum + currentElement
  average = sum / currentElement
}

console.log(average)
