import { getSalary } from '../index'

describe('test strategy design pattern', () => {
  it('shoud work', () => {
    const salary = getSalary('A', 100)
    expect(salary).toEqual(400)
  })
})
