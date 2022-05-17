/* _____________ Your Code Here _____________ */

// type PrimitiveK<T, P extends keyof T> = symbol | string extends T[P] ? never : P

// type RemoveIndexSignature<T> = {
//   [P in keyof T as PrimitiveK<T, P>]: T[P]
// }

type RemoveIndexSignature<T> = {
  [P in keyof T as P extends `${infer U}` ? P : never]: T[P]
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { foobar(): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>
]
const n: symbol = Symbol()

type Foo = {
  [key: string]: any
  foo(): void
}

type Bar = {
  [key: number]: any
  bar(): void
}

type FooBar = {
  [key: symbol]: any
  foobar(): void
}

type Baz = {
  bar(): void
  baz: string
}
