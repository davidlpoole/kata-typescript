// getGreeting should return a string containing
// 'Hello ' and the contents of `name`
export function getGreeting(name: string): string {
  return `Hello ${name}`
}

// getFullName should return a string containing the contents
// of `firstName` and the contents of `lastName`
export function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`
}

// addNumbers should return the sum of the two parameters
export function addNumbers(num1: number, num2: number): number {
  return num1 + num2
}

// bottlesOfBeerOnTheWall should return a string containing
// the number of bottles of beer on the wall, but!
// if the number of bottles is 0, it should return 'No more bottles of beer on the wall'
export function bottlesOfBeerOnTheWall(num: number): string {
  return `${num > 0 ? num : 'No more'} bottles of beer on the wall`
}

// printGreeting should not return a value,
// instead it should console.log a string containing
// 'Hello name'
export function printGreeting(name: string): void {
  console.log(`Hello ${name}`)
}

// ----------- OPTIONAL PARAMS -----------

// sumFrame accepts two balls and returns the sum of the two numbers
// sometimes there may be a third ball, if there is, add it to the sum
export function sumFrame(ball1 = 0, ball2 = 0, ball3 = 0): number {
  return ball1 + ball2 + ball3
}

// greetFullName should return a string containing the full name
// including middle name if it exists
export function greetFullName(
  firstName: string,
  lastName: string,
  middleName = ''
): string {
  if (middleName === '') return `Hello ${firstName} ${lastName}`
  return `Hello ${firstName} ${middleName} ${lastName}`
}

// ----------- UNIONS -----------

// addNumbersAndStrings accepts two arguments that can be either a number or a number inside a string
// the sum of the two arguments should be returned as a number regardless of their original type
export function addNumbersAndStrings(
  num1: number | string,
  num2: number | string
): number {
  const convertedNum1 = typeof num1 === 'number' ? num1 : Number(num1)
  const convertedNum2 = typeof num2 === 'number' ? num2 : Number(num2)

  return convertedNum1 + convertedNum2
}

// fizzbuzz accepts a number and returns a string or number
// if the number is divisible by 3, return 'fizz'
// if the number is divisible by 5, return 'buzz'
// if the number is divisible by 3 and 5, return 'fizzbuzz'
// otherwise, return the original number
export function fizzbuzz(num: number): number | string {
  let output = ''

  const divisibleBy3 = num % 3 === 0
  const divisibleBy5 = num % 5 === 0

  if (divisibleBy3) output += 'fizz'
  if (divisibleBy5) output += 'buzz'

  return output || num
}

// ----------- TYPE ALIASES -----------

// sumMatchingType accepts two arguments that can be either a number or a string
// if both arguments are numbers, the sum of the two arguments should be returned as a number
// if either argument is a string, the two arguments should be summed together and returned as a string

type StringOrNumber = number | string

export function sumMatchingType(
  num1: StringOrNumber,
  num2: StringOrNumber
): StringOrNumber {
  return typeof num1 === 'string' || typeof num2 === 'string'
    ? `${Number(num1) + Number(num2)}`
    : num1 + num2
}

// getNextTrafficLightColour accepts the current colour of a traffic light colour and returns the next colour
// the light sequence is green -> yellow -> red -> green -> yellow -> (etc)
// Remember to use a type alias!

type TrafficLightColour = 'green' | 'yellow' | 'red'

export function getNextTrafficLightColour(
  currentColour: TrafficLightColour
): TrafficLightColour {
  const cycle: TrafficLightColour[] = ['green', 'yellow', 'red']
  const currentIndex = cycle.indexOf(currentColour)
  const nextIndex = (currentIndex + 1) % cycle.length
  return cycle[nextIndex]
}
