/* _____________ Your Code Here _____________ */

// type MyPick<T> = Pick<T, keyof T>
// type PartialByKeys<T, K = keyof T> = MyPick<{
//   [P in Extract<keyof T, K>]?: T[P]
// } & {
//   [P in keyof Omit<T, Extract<keyof T, K>>]: T[P]
// }>

type Merge<T, U> = Pick<T & U, keyof (T & U)>
type PartialByKeys<T, K = keyof T> = Merge<
  Pick<Partial<T>, Extract<keyof T, K>>,
  // Partial<Pick<T, Extract<keyof T, K>>>,
  Pick<T, Exclude<keyof T, K>>
>

type a = PartialByKeys<User, 'name'>
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>
]

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}
