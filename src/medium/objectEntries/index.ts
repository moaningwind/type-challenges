/* _____________ Your Code Here _____________ */


// type ObjectEntries<T> = keyof T extends string ? [keyof T, T[keyof T]] : never

type Value<T> = [T] extends [undefined] ? T : Exclude<T, undefined>

type ObjectEntries<T> = {
  [K in keyof T]-?: [K, Value<T[K]>]
}[keyof T];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>
]

interface Model {
  name: string
  age: number
  locations: string[] | null
}
