/* _____________ Your Code Here _____________ */

type Chunk<
  T extends unknown[],
  N extends number = 1,
  Chunked extends unknown[] = []
> = T extends [infer Head, ...infer Tail]
  ? Chunked['length'] extends N
    ? [Chunked, ...Chunk<T, N>]
    : Chunk<Tail, N, [...Chunked, Head]>
  : Chunked extends []
  ? []
  : [Chunked]

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>
]
