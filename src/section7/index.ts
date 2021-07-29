const each = <T>(arr: T[], fn: (i: number, value: T) => any) => {
  for (let i = 0; i < arr.length; i++) {
    if (fn.call(arr[i], i, arr[i]) === false)
      break
  }
}

const arr = Array.from({ length: 10 }, (_, i) => `value-${i}`)

each(arr, (i, value) => {
  if (i > 8) return false
  console.log(`i: ${i}, value: ${value}`)
})
