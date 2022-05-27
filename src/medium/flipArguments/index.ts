/* _____________ Your Code Here _____________ */

type Reverse<T> = T extends [...infer F, infer R] ? [R, ...Reverse<F>] : T

type FlipArguments<T extends (...args: any[]) => any> = (
  ...arg: [...Reverse<Parameters<T>>]
) => ReturnType<T>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >
]
