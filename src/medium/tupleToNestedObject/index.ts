/* _____________ Your Code Here _____________ */

type TupleToNestedObject<T, U> = T extends [infer F, ...infer R]
  ? F extends string | number | symbol
    ? {
        [key in F]: TupleToNestedObject<R, U>
      }
    : never
  : U

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<
    Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
]
