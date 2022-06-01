import type { Equal } from '@type-challenges/utils'

export type Includes<T extends unknown[], U> = T extends [infer Head, ...infer Tail]
  ? Equal<Head, U> extends true
    ? true
    : Includes<Tail, U>
  : false
