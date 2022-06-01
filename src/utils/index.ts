type ToTuple<L extends number, T extends unknown[] = []> = T extends { length: L }
  ? T
  : ToTuple<L, [...T, unknown]>

export type Add<A extends number, B extends number> = [
  ...ToTuple<A>,
  ...ToTuple<B>
]['length']

export type Sub<A extends number, B extends number> = ToTuple<A> extends [
  ...ToTuple<B>,
  ...infer Tail
]
  ? Tail['length']
  : -1

export type Tail<T extends unknown[]> = T extends [infer _, ...infer Tail] ? Tail : T

export type Head<T extends unknown[]> = T extends [...infer Head, infer _] ? Head : T

export type Last<T extends unknown[]> = T extends [...infer _, infer Tail] ? Tail : T

export type First<T extends unknown[]> = T extends [infer Head, ...infer _] ? Head : T
