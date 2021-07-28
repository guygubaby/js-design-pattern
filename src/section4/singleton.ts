
export const getSingleton = (fn: Function) => {
  let result: unknown
  return function(...args: unknown[]) {
    if (result)
      return result

    result = fn.apply(this, args)
    return result
  }
}
