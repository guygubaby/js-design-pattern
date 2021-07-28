import { getSingleton } from '../singleton'

const createPerson = () => {
  const person = Object.create(null)
  person.name = 'bryce'
  return person
}

describe('test singleton', () => {
  it('it should be the same object', () => {
    const createPersonSingleton = getSingleton(createPerson)
    const p1 = createPersonSingleton()
    const p2 = createPersonSingleton()
    expect(p1).toEqual(p2)
  })
})
