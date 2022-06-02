/* _____________ Your Code Here _____________ */

export type Join<
  T extends unknown[],
  U extends string | number,
  K extends string = ''
> = T extends [infer Head, ...infer Tail]
  ? Head extends string
    ? Join<Tail, U, K extends '' ? Head : `${K}${U}${Head}`>
    : never
  : K

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>
]
