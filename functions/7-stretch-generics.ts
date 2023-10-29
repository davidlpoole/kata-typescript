// DOCS: https://www.typescriptlang.org/docs/handbook/2/generics.html

// fillArrayWithAnything should take a value of any type and a number
// and return an array of that value repeated the number of times
// if the number is less than 1, return an empty array
export function fillArrayWithAnything<Type>(item: Type, count: number): Type[] {
  if (count < 1) return []
  return Array(count).fill(item)
}

// getArrayOfZeros should take a number and return an array of that number of zeros
// it should use the fillArrayWithAnything function to do this
export function getArrayOfZeros(num: number): number[] {
  return fillArrayWithAnything(0, num)
}

// getArrayOfBees should take a number and return an array of that number of "bees"
// it should use the fillArrayWithAnything function to do this
export function getArrayOfBees(num: number): string[] {
  return fillArrayWithAnything('bee', num)
}

// getFirstItem should take an array of any type and return the first item in the array regardless of type
// the item should no longer be in the array
// if there is no first item, return undefined
export function removeFirstItem<Type>(array: Type[]): Type | undefined {
  return array.shift()
}

// removeEmptySpots should take an array of nulls and another type and remove all null values
// it should return a new array containing the remaining items
// Hint: you may need a type assertion - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
export function removeEmptySpots<Type>(array: Type[]): Type[] {
  return array.filter((item) => item !== null)
}

export function getEmptyArray<T>(): T[] {
  return []
}

/*
  The following code is for testing getEmptyArray.

  Once getEmptyArray is implemented, you can uncomment the code below
  and fix the errors to properly call it.
  Check TS documentation about calling generic functions for more info.
*/

function getStringsInArray(): string[] {
  const arr: string[] = getEmptyArray()
  arr.push('hello')
  arr.push('world')
  return arr
}

function getNumbersInArray(): number[] {
  const arr: number[] = getEmptyArray()
  arr.push(1)
  arr.push(2)
  arr.push(3)
  return arr
}
