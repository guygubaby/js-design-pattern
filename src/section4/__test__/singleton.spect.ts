import { testFunc } from '../singleton'

describe('test jest config', () => {
  it('should print 123', () => {
    const res = testFunc()
    expect(res).toEqual(123)
  })
})
