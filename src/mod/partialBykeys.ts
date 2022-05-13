/* _____________ Your Code Here _____________ */
type partialBykeys<T, K extends keyof T> = {
  [P in K]?: T[P]
} & Omit<T, K>

type Simplify<T> = {
  [P in keyof T]: T[P]
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Simplify<partialBykeys<User1, 'id'>>, User2>>,
]

interface User1 {
  id: number
  name: string
}

interface User2 {
  id?: number
  name: string
}
