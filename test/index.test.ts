import { describe, expect, it } from 'vitest'
import { twoSum, threeSum } from '../src/hard/twoSum'

describe('should', () => {
  it('util twoSum', () => {
    expect(twoSum([5, 2, 1], 7)).toEqual(true)
  })
  it('util threeSum', () => {
    expect(threeSum([3, 5, 2, 1], 8)).toEqual(true)
  })
})
