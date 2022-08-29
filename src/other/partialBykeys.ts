/* _____________ Your Code Here _____________ */
type PartialByKeys<T, K extends keyof T = keyof T> = {
  [P in K]?: T[P]
} & Omit<T, K>

type Simplify<T> = {
  [P in keyof T]: T[P]
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Simplify<PartialByKeys<User1, 'id'>>, User2>>,
  Expect<Equal<Simplify<PartialByKeys<User1>>, Partial<User1>>>
]

interface User1 {
  id: number
  name: string
}

interface User2 {
  id?: number
  name: string
}
