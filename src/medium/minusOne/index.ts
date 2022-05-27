/* _____________ Your Code Here _____________ */

type MinusOne<T extends number, Result extends number[] = []> = T extends Result['length']
  ? Result extends [infer _F, ...infer R]
    ? R['length']
    : 0
  : MinusOne<T, [...Result, T]>
 
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  // Expect<Equal<MinusOne<1101>, 1100>> // TODO
]
