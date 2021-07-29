const multiply = (...args: number[]): number => {
  return args.reduce((accumulator, current) => {
    return accumulator * current
  }, 1)
}

const sum = (...args: number[]): number => {
  return args.reduce((accumulator, current) => {
    return accumulator + current
  }, 0)
}

const createProxyFactory = <T extends string|number>(fn: Function) => {
  const cache: Record<string, T> = Object.create(null)
  return (...args: T[]) => {
    const key = args.join('-')
    if (cache[key]) return cache[key]
    return cache[key] = fn(...args)
  }
}

const cachedMultiply = createProxyFactory(multiply)
const cachedSum = createProxyFactory(sum)

const res = cachedMultiply(1, 2, 3, 4)
console.log('res: ', res)
const res1 = cachedMultiply(1, 2, 3, 4)
console.log('res1: ', res1)

const res3 = cachedSum(1, 2, 3, 4)
console.log('res3: ', res3)
const res4 = cachedSum(1, 2, 3, 4)
console.log('res4: ', res4)
