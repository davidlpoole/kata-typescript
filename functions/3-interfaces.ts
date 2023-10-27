interface Contact {
  id: number
  name: string
  address: string
}

// getAddress returns the address of a contact object
// contacts have an id, name, and address that will need to be added to the interface above
export function getAddress(contact: Contact): string {
  return contact.address
}

// howManyFriends is passed an array of contacts
// it should return the number of contacts in the given array
export function howManyFriends(contacts: Contact[]): number {
  return contacts.length
}

// findTheBat is passed an array of contacts
// and returns the address of Batman
// or null if there is no Batman
export function findTheBat(contacts: Contact[]): string | null {
  return contacts.find((contact) => contact.name === 'Batman')?.address || null
}

// ----------- OPTIONAL VS REQUIRED KEYS -----------

type User = {
  name: string
  verified?: boolean
  picture?: string
  email?: string
}

// generateNewUser is passed a name
// it should return a new (unverified) user object
export function generateNewUser(name: string): User {
  return { name, verified: false }
}

// verifyUser is passed a User object and an email
// it should return a new User object with an email and verified set to true
export function verifyUser(user: User, email: string): User {
  return { ...user, email, verified: true }
}

// updateUserPhoto is passed a User object and a picture url
// it should return a new User object with the picture set to the given url
export function updateUserPhoto(user: User, url: string): User {
  return { ...user, picture: url }
}

// getUserPhoto is passed a User object
// it should return the picture if it exists
// otherwise it should return a link to a kitten -> https://placekitten.com/200/300
export function getUserPhoto(user: User): string {
  return user.picture || 'https://placekitten.com/200/300'
}

// ----------- RECORDS -----------

// getUser is passed two arguments, an id number and
// an object with numbers as keys and Users as values
// getUser should return the user with the given id
// or null if there is no user with that id

type Users = Record<number, User>

export function getUser(id: number, users: Users): User | null {
  return users[id] || null
}
