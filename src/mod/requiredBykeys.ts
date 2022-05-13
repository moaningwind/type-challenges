/* _____________ Your Code Here _____________ */
type requiredBykeys<T, K extends keyof T> = {
  [P in K]-?: T[P]
} & Omit<T, K>

// TODO why
type Simplify<T> = {
  [P in keyof T]: T[P]
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Simplify<requiredBykeys<User2, 'id'>>, User1>>,
]

interface User1 {
  id: number
  name: string
}

interface User2 {
  id?: number
  name: string
}