/* _____________ Your Code Here _____________ */

type IsAny<T> = 1 extends T & 0 ? true : false

type IsNever<T> = [T] extends [never] ? true : false

type IsTuple<T> = true extends IsAny<T> | IsNever<T>
  ? false
  : T extends readonly [infer First, ...infer Tail] | readonly []
  ? true
  : false

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
  Expect<Equal<IsTuple<any>, false>>
]
