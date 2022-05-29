export function twoSum(
  arr: number[],
  target: number,
  set: Set<number> = new Set()
): boolean {
  if (arr.length === 0) return false
  return set.has(target - arr[0]) || twoSum(arr.slice(1), target, set.add(arr[0]))
}

export function threeSum(arr: number[], target: number): boolean {
  if (arr.length < 3) return false
  return arr.some((a, i) => {
    const rest = arr.slice(i + 1)
    console.log(rest, target - a)
    return twoSum(rest, target - a)
  })
}

type ToTuple<L extends number, T extends unknown[] = []> = T extends { length: L }
  ? T
  : ToTuple<L, [...T, unknown]>

type Add<A extends number, B extends number> = [...ToTuple<A>, ...ToTuple<B>]['length']

type Sub<A extends number, B extends number> = ToTuple<A> extends [
  ...ToTuple<B>,
  ...infer Tail
]
  ? Tail['length']
  : -1

type a = Sub<2, 2>

type Tail<T extends number[]> = T extends [any, ...infer Tail] ? Tail : []

/* _____________ Your Code Here _____________ */

type TwoSum<N extends number[], T extends number, S = never> = N['length'] extends 0
  ? false
  : Sub<T, N[0]> extends S
  ? true
  : TwoSum<Tail<N>, T, S | N[0]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TwoSum<[3, 3], 6>, true>>,
  Expect<Equal<TwoSum<[3, 2, 4], 6>, true>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 15>, false>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 9>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 0>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 1>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 2>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 3>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 4>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 5>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 6>, false>>
]
