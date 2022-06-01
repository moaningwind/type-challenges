/* _____________ Your Code Here _____________ */

type Include<T extends unknown[], U> = T extends [infer Head, ...infer Tail]
  ? Equal<Head, U> extends true
    ? true
    : Include<Tail, U>
  : false

type Unique<T extends unknown[], R extends unknown[] = []> = T extends [
  infer Head,
  ...infer Tail
]
  ? Unique<Tail, Include<R, Head> extends true ? R : [...R, Head]>
  : R

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<
    Equal<
      Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>,
      [string, number, 1, 'a', 2, 'b']
    >
  >,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>
]
