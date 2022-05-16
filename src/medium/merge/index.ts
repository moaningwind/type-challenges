/* _____________ Your Code Here _____________ */
// TODO deepMerge
type Merge<F, S> = {
  [P in keyof F | keyof S]: P extends keyof S ? S[P] : P extends keyof F ? F[P] : never
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: {
    id: number
    name: string
  }
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: {
          id: number
          name: string
        }
        b: number
        c: boolean
      }
    >
  >
]
