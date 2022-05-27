/* _____________ Your Code Here _____________ */

type Merge<T, U> = Pick<T & U, keyof (T & U)>
type RequiredByKeys<T, K = keyof T> = Merge<
  Pick<Required<T>, Extract<keyof T, K>>,
  // Required<Pick<T, Extract<keyof T, K>>>,
  Pick<T, Exclude<keyof T, K>>
>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>
]

interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}
