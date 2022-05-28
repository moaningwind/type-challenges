/* _____________ Your Code Here _____________ */

type Fibonacci<
  T extends number,
  U extends unknown[] = [unknown],
  K extends unknown[] = [],
  O extends unknown[] = [unknown]
> = O['length'] extends T ? U['length'] : Fibonacci<T, [...U, ...K], U, [unknown, ...O]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [Expect<Equal<Fibonacci<3>, 2>>, Expect<Equal<Fibonacci<8>, 21>>]
