/* _____________ Your Code Here _____________ */

type Without<T, U, K extends any[] = []> = T extends [infer L, ...infer R]
  ? L extends (U extends any[] ? U : [U])[number]
    ? Without<R, U, K>
    : Without<R, U, [...K, L]>
  : K

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
]
