/* _____________ Your Code Here _____________ */

type FlattenOnce<T extends unknown[]> = T extends [infer F, ...infer R]
  ? F extends unknown[]
    ? [...F, ...FlattenOnce<R>]
    : [F, ...FlattenOnce<R>]
  : T

type FlattenDepth<
  T extends unknown[],
  D extends number = 1,
  P extends unknown[] = []
> = P['length'] extends D
  ? T
  : FlattenOnce<T> extends T
  ? T
  : FlattenDepth<FlattenOnce<T>, D, [...P, unknown]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>
]
