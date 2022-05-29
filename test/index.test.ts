import { describe, expect, it } from 'vitest'
import { toSum } from '../src/hard/twoSum'

describe('should', () => {
  it('util toSum', () => {
    expect(toSum([3, 5, 2, 1], 6)).toEqual(true)
  })
})
