/* _____________ Your Code Here _____________ */
import { Sub } from '@/utils/index'

// 这题不是很好写 需要分清楚边界条件 哪里需要 fill 原数组的元素 哪里需要 fill 新的元素
// 利用好函数参数默认值 以尾递归的形式实现 也可不使用尾递归
// 不过个人觉得这题使用尾递归的思路更好理解一些 不采用尾递归的话就是由子结果得到最终结果

type GreaterThanOrEqual<First extends number, Second extends number> = Sub<
  First,
  Second
> extends -1
  ? false
  : true

// 普通版本没运用尾递归
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Cur extends any[] = [] // 表示当前的下标
> = Cur['length'] extends T['length']
  ? []
  : GreaterThanOrEqual<Cur['length'], Start> extends true
  ? GreaterThanOrEqual<Cur['length'], End> extends true
    ? [T[Cur['length']], ...Fill<T, N, Start, End, [...Cur, any]>]
    : [N, ...Fill<T, N, Start, End, [...Cur, any]>]
  : [T[Cur['length']], ...Fill<T, N, Start, End, [...Cur, any]>]

// 运用尾递归的版本
type FillByTail<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Array extends any[] = [],
  newArray extends any[] = []
> = Array['length'] extends T['length']
  ? newArray
  : GreaterThanOrEqual<Array['length'], Start> extends true
  ? GreaterThanOrEqual<Array['length'], End> extends true
    ? FillByTail<T, N, Start, End, [...Array, any], [...newArray, T[Array['length']]]>
    : FillByTail<T, N, Start, End, [...Array, any], [...newArray, N]>
  : FillByTail<T, N, Start, End, [...Array, any], [...newArray, T[Array['length']]]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases1 = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>
]

type cases2 = [
  Expect<Equal<FillByTail<[], 0>, []>>,
  Expect<Equal<FillByTail<[], 0, 0, 3>, []>>,
  Expect<Equal<FillByTail<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<FillByTail<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<FillByTail<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<FillByTail<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<FillByTail<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<FillByTail<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<FillByTail<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<FillByTail<[1, 2, 3], true, 0, 10>, [true, true, true]>>
]
