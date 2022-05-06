/* _____________ Your Code Here _____________ */
// TODO why
// type MyReadonly2<T, K extends keyof T = keyof T> = { readonly [R in K]: T[R] } & {
//   [N in Exclude<keyof T, K>]: T[N]
// }

type MyReadonly2<T, K extends keyof T = keyof T> = { readonly [P in K]: T[P] } & {
  [P in keyof T as P extends K ? never : P]: T[P]
}

/**
 * 1. K 赋初始化，如果不传值就是默认所有是 readonly
 * 2. & 运算
 * 3. 先把 K 中包含的都变成 readonly
 * 4. 再计算 K 之外剩下的，都是普通类型
 */

/* _____________ Test Cases _____________ */
import type { Expect, Alike, Equal } from '@type-challenges/utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected1>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'completed'>, Expected2>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected1>>
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected1 {
  readonly title: string
  readonly description?: string
  completed: boolean
}

interface Expected2 {
  readonly title: string
  description?: string
  readonly completed: boolean
}
