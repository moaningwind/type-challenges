import { describe, expect, it } from 'vitest'
import { twoSum } from '../src/hard/twoSum'

describe('should', () => {
  it('util toSum', () => {
    expect(twoSum([3, 5, 2, 1], 6)).toEqual(true)
  })
})
