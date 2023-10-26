// getNextNum should return the first number in the array
export function getNextNum(array: number[]): number {
  return array[0]
}

// getLastSongPlayed should return the last song in the array
export function getLastSongPlayed(array: string[]): string {
  return array.slice(-1)[0]
}

// findLongestWord should return the longest word in the array
export function findLongestWord(words: string[]): string {
  return words.reduce((longest, word) =>
    word.length > longest.length ? word : longest
  )
}

// fillArrayWithBees should return an array of the correct length, filled with the string 'buzz'
export function fillArrayWithBees(count: number): string[] {
  return new Array(count).fill('buzz')
}

// sortBySize should return a copy of an array of strings sorted by length
export function sortBySize(array: string[]): string[] {
  return array.slice().sort((a, b) => a.length - b.length)
}

// ----------- ARRAYS WITH UNIONS -----------
// Note: as we are dealing with multiple types in these arrays, TS may have a harder time inferring
// the types you expect. E.g. if you choose use a built in method, you may need to add types to
// the inner function to help TS infer the correct type.
// You can also use type assertions to help TS infer the correct type.

// sumStringsAndNumbers should return the sum of all the items in the array
// regardless of whether they are strings or numbers
export function sumStringsAndNumbers(array: (string | number)[]): number {
  return array.reduce((sum: number, item) => sum + Number(item), 0)
}

// stringsOnly will be passed an array of strings and some null values
// it should return a new array with all the null values removed - strings only!
export function stringsOnly(array: (string | null)[]): string[] {
  return array.filter((item) => item !== null) as string[]
}

// ----------- TUPLES -----------

// generateUsername should return a username
// based on a tuple containing the first name, last name and year born
// e.g. generateUsername(['John', 'Smith', 1980]) should return 'smithjo_1980'
// e.g. generateUsername(['Jane', 'Doe', 1965]) should return 'doeja_1965'
export function generateUsername(
  userDetails: [string, string, number]
): string {
  const [first, last, dob] = userDetails
  return last.toLowerCase() + first.toLowerCase().slice(0, 2) + '_' + dob
}

// getNextMapCoord should return the next coordinate in the direction specified
// e.g. getNextMapCoord([0, 0], 'N') should return [0, 1]
// e.g. getNextMapCoord([0, 0], 'S') should return [0, -1]
// e.g. getNextMapCoord([0, 0], 'E') should return [1, 0]
// e.g. getNextMapCoord([0, 0], 'W') should return [-1, 0]

interface Directions {
  [key: string]: [number, number]
}

export function getNextMapCoord(
  coord: [number, number],
  direction: string
): [number, number] {
  const directions: Directions = {
    N: [0, 1],
    S: [0, -1],
    E: [1, 0],
    W: [-1, 0],
  }
  const result = [0, 0]
  result[0] = coord[0] + directions[direction][0]
  result[1] = coord[1] + directions[direction][1]
  return result as [number, number]
}
