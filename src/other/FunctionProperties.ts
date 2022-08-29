/* _____________ Your Code Here _____________ */
type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T] // union type

type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FunctionPropertyNames<Person>, 'update' | 'add'>>,
  Expect<
    Equal<FunctionProperties<Person>, { update: Person['update']; add: Person['add'] }>
  >
]

interface Person {
  id: number
  name: string
  update: (name: string) => void
  add: (id: number) => void
}
