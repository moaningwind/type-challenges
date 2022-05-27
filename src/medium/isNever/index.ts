/* _____________ Your Code Here _____________ */

type IsNever<T> = [T] extends [never] ? true : false
// type IsNever<T> = T extends never ? true : false
// 泛型里 never extends never 为 never

// type IsNever<T> = Equal<T, never>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]
