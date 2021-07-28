const multiply = (...args: number[]): number => {
  return args.reduce((accumulator, current) => {
    return accumulator + current
  }, 0)
}

const cacheMultiply = (() => {
  const cache: Record<string, number> = Object.create(null)
  return (...args: number[]) => {
    const key = args.join('-')
    if (cache[key]) return cache[key]
    return cache[key] = multiply(...args)
  }
})()

cacheMultiply(1, 2, 4)
