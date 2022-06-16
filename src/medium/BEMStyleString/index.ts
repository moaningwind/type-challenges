/* _____________ Your Code Here _____________ */

type BEM<B extends string, E extends string[], M extends string[]> = E['length'] extends 0
  ? M['length'] extends 0
    ? B
    : `${B}--${M[number]}`
  : M['length'] extends 0
  ? `${B}__${E[number]}`
  : `${B}__${E[number]}--${M[number]}`

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<
    Equal<
      BEM<'btn', ['price'], ['warning', 'success']>,
      'btn__price--warning' | 'btn__price--success'
    >
  >,
  Expect<
    Equal<
      BEM<'btn', [], ['small', 'medium', 'large']>,
      'btn--small' | 'btn--medium' | 'btn--large'
    >
  >
]
