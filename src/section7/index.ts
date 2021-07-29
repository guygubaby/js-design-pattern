// demo01

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

// demo02

/**
 * fallback one in mutltiple choices
 */

// 1. normal way

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getUploadObj = function() {
  try {
    // @ts-expect-error
    return new ActiveXObject('TXFTNActiveX.FTNUpload')
  }
  catch (e) {
  // IE 上传控件
    // @ts-expect-error
    if (supportFlash()) { // supportFlash 函数未提供
    // @ts-expect-error
      const str = '<object type="application/x-shockwave-flash"></object>'; return $(str).appendTo($('body'))
    }
    else {
      const str = '<input name="file" type="file"/>' // 表单上传
      // @ts-expect-error
      return $(str).appendTo($('body'))
    }
  }
}

// 2. use the iterator instead
const getA = (isWork: boolean) => {
  if (isWork)
    return 'A'

  return false
}

const getB = (isWork: boolean) => {
  if (isWork)
    return 'B'

  return false
}

const getC = (isWork: boolean) => {
  if (isWork)
    return 'C'

  return false
}

const chooseType = (...args: ((isWork: boolean) => any)[]) => {
  for (let i = 0; i < args.length; i++) {
    const type = args[i](Math.random() > 0.5)
    if (type !== false)
      return type
  }
}

const type = chooseType(getA, getB, getC)
console.log(type)
