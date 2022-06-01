/* _____________ Your Code Here _____________ */

// type DropChar<S, C, T extends string = ''> = S extends `${infer F}${infer R}`
//   ? DropChar<R, C, Equal<F, C> extends true ? T : `${T}${F}`>
//   : T

type DropChar<
  S extends string,
  C extends string
> = S extends `${infer First}${C}${infer Rest}`
  ? // 当 C 为'' First = 'b' Rest = 'utter fly!' 会导致无限循环抛出错误
    DropChar<`${First}${Rest}`, C>
  : S

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
  Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>
]
