/* _____________ Your Code Here _____________ */
import { Join } from '../join'
import { Permutation } from '../permutation'
import { Subsequence } from '../subsequence'

type Combination<T extends string[]> = Exclude<
  Join<Subsequence<Permutation<T[number]>>, ' '>,
  ''
>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<
    Equal<
      Combination<['foo', 'bar', 'baz']>,
      | 'foo'
      | 'bar'
      | 'baz'
      | 'foo bar'
      | 'foo bar baz'
      | 'foo baz'
      | 'foo baz bar'
      | 'bar foo'
      | 'bar foo baz'
      | 'bar baz'
      | 'bar baz foo'
      | 'baz foo'
      | 'baz foo bar'
      | 'baz bar'
      | 'baz bar foo'
    >
  >
]
