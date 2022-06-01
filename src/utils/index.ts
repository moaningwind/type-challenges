import type { ConstructTuple } from '../medium/constructTuple'

export type Add<A extends number, B extends number> = [
  ...ConstructTuple<A>,
  ...ConstructTuple<B>
]['length']

export type Sub<A extends number, B extends number> = ConstructTuple<A> extends [
  ...ConstructTuple<B>,
  ...infer Tail
]
  ? Tail['length']
  : -1

export type Tail<T extends unknown[]> = T extends [infer _, ...infer Tail] ? Tail : T

export type Head<T extends unknown[]> = T extends [...infer Head, infer _] ? Head : T

export type Last<T extends unknown[]> = T extends [...infer _, infer Last] ? Last : T

export type First<T extends unknown[]> = T extends [infer First, ...infer _] ? First : T
