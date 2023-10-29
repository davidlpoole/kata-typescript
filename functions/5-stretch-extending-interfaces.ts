// DOCS: https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types

interface Vehicle {
  make: string
  model: string
  year: number
}

// getVehicle should return a Vehicle object
// it is passed a make, model, and year as parameters
export function getVehicle(make: string, model: string, year: number): Vehicle {
  return { make, model, year }
}

interface Car extends Vehicle {
  doors: number
}

// getCar should return a Car object (extension of Vehicle)
// it is passed a make, model, year, and the number of doors as parameters
export function getCar(
  make: string,
  model: string,
  year: number,
  doors: number
): Car {
  return { make, model, year, doors }
}

interface Motorcycle extends Vehicle {
  sidecar: boolean
}

// getMotorcycle should return a Motorcycle object (extension of Vehicle)
// it is passed a make, model, year, and whether there is a sidecar as parameters
export function getMotorcycle(
  make: string,
  model: string,
  year: number,
  sidecar: boolean
): Motorcycle {
  return { make, model, year, sidecar }
}

interface Truck extends Vehicle {
  wheels: number
  trailer: boolean
}

// getTruck should return a Truck object (extension of Vehicle)
// it is passed a make, model, year, the number of wheels, and whether it has a trailer as parameters
export function getTruck(
  make: string,
  model: string,
  year: number,
  wheels: number,
  trailer: boolean
): Truck {
  return { make, model, year, wheels, trailer }
}

// generateVehicles should return an array of predefined vehicles (check the test for more info)
// it should use the functions above to generate the vehicles
export function generateVehicles(): Vehicle[] {
  return [
    getVehicle('Ford', 'F-150', 2019),
    getCar('Chevy', 'Camaro', 2020, 2),
    getCar('Toyota', 'Prius', 2018, 4),
    getMotorcycle('Harley-Davidson', 'Sportster', 2019, true),
    getTruck('Ford', 'F-150', 2019, 4, false),
  ]
}

// ----------- DEFINED KEYS -----------

type User = {
  name: string
  email: string
  picture: string
  role: string
}

// createUserObj will be passed a name and an email
// it will sometimes be passed a picture as a third parameter
// it should return an object with the above properties and a role defined as 'user' and return that object
export function createUserObj(name: string, email: string, picture: ''): User {
  return { name, email, picture, role: 'user' }
}

// upgradeToAdmin will be passed a user object
// it should alter the role property to be 'admin' and return the object
export function upgradeToAdmin(user: User): User {
  return { ...user, role: 'admin' }
}

// isUserAdmin will be passed a user object
// it should return true if the role is 'admin' and false if it is not
// Depending on how you code this, you may need a type predicate - https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
// or a type assertion - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
export function isUserAdmin(user: User): boolean {
  return user.role === 'admin'
}

// getAdmins will be passed an array of user objects
// it should return an array of only the admin users
// you should use the above function to help you
export function getAdmins(users: User[]): User[] {
  return users.filter((user) => isUserAdmin(user))
}
