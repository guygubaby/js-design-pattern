// https://javascript.info/async-iterators-generators

const sleep = async(value: number) => {
  return value
}

class MyCollection {
  *[Symbol.iterator]() {
    let i = 0
    while (this[i] !== undefined) {
      yield this[i]
      ++i
    }
  }

  async *[Symbol.asyncIterator]() {
    let count = 0
    while (count < 10)
      yield await sleep(count++)
  }
}

const collection = new MyCollection()

collection[0] = 'bryce'
collection[1] = 'loskie'

// eslint-disable-next-line curly
for (const i of collection) {
  console.log(i)
}

(async() => {
  for await (const i of collection)
    console.log(i)
})()
