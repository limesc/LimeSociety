import lodash from 'lodash'

export function hasNoValue (obj, skipKeys: Array<string> = []): boolean {
  if (Array.isArray(obj)) {
    for (const v of obj) {
      if (!hasNoValue(v, skipKeys)) {
        return false
      }
    }
    return true
  } else if (typeof obj === 'object') {
    for (const k in obj) {
      if (skipKeys.includes(k)) {
        continue
      }
      const v = obj[k]
      if (!hasNoValue(v, skipKeys)) {
        return false
      }
    }
    return true
  } else {
    if (obj || obj === 0 || obj === true || obj === false) {
      return false
    }
    return true
  }
}

function trackLastChild (src) {
  if (Array.isArray(src)) {
    let result = []
    for (let i = 0; i < src.length; i++) {
      result = result.concat(
        trackLastChild(src[i]).map(value => {
          if (value.length > 0) {
            return '[' + i + '].' + value
          } else {
            return '[' + i + ']'
          }
        })
      )
    }
    return result
  } else if (typeof src === 'object') {
    let result = []
    const keys = Object.keys(src)
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      result = result.concat(
        trackLastChild(src[key]).map(value => {
          if (value.length > 0) {
            return key + '.' + value
          } else {
            return key
          }
        })
      )
    }
    return result
  } else {
    return ['']
  }
}

function compareElement (src: any, dst: any) {
  if (Array.isArray(src)) {
    if (!dst) {
      dst = []
    }
    return compareArray(src, dst)
  }
  if (typeof src === 'object') {
    if (!dst) {
      dst = {}
    }
    return compareObject(src, dst)
  }
  if (src === dst) {
    return []
  } else {
    return ['']
  }
}

function compareArray (src: Array<any>, dst: Array<any>) {
  const length = Math.max(src.length, dst.length)
  let result = []
  for (let i = 0; i < length; i++) {
    const e1 = src[i]
    const e2 = dst[i]
    if (e1 === undefined) {
      trackLastChild(e2)
    } else if (e2 === undefined) {
      trackLastChild(e1)
    } else {
      const temp = compareElement(e1, e2).map(value => {
        if (value.length === 0) {
          return '[' + i + ']'
        } else {
          return '[' + i + '].' + value
        }
      })
      result = result.concat(temp)
    }
  }
  return result
}

function compareObject (src: object, dst: object) {
  const srcKeys = new Set(Object.keys(src))
  const dstKeys = new Set(Object.keys(dst))
  const commonKeys = new Set()
  const diffKeysSrc = new Set()
  const diffKeysDst = new Set()

  srcKeys.forEach(key => {
    if (!dstKeys.has(key)) {
      diffKeysSrc.add(key)
    } else {
      commonKeys.add(key)
    }
  })
  dstKeys.forEach(key => {
    if (!srcKeys.has(key)) {
      diffKeysDst.add(key)
    }
  })

  let result = [].concat(
    ...Array.from(commonKeys).map(key => {
      return compareElement(src[key], dst[key]).map(value => {
        if (value.length === 0) {
          return key
        } else {
          return key + '.' + value
        }
      })
    })
  )

  result = result.concat(
    ...Array.from(diffKeysSrc).map(key => {
      return trackLastChild(src[key]).map(value => {
        if (value.length === 0) {
          return key
        } else {
          return key + '.' + value
        }
      })
    })
  )

  result = result.concat(
    ...Array.from(diffKeysDst).map(key => {
      return trackLastChild(dst[key]).map(value => {
        if (value.length === 0) {
          return key
        } else {
          return key + '.' + value
        }
      })
    })
  )

  return result
}

export function deepCompare (src: any, dst: any) {
  const result = compareElement(src, dst)
  return result.map(value => {
    return value.replace(/\.\[/gi, '[')
  })
}

export function spreadObject (target: any, prefix?: string) {
  let result
  if (Array.isArray(target)) {
    result = lodash.flatten(
      target.map((e, i) => {
        return lodash.flatten([
          spreadObject(e, prefix + '[' + i + ']'),
          spreadObject(e, prefix + '[*]')
        ])
      })
    )
  } else if (typeof target === 'object') {
    const keys = Object.keys(target)
    result = lodash.flatten(
      keys.map(e => {
        return spreadObject(target[e], prefix + '.' + e)
      })
    )
  } else {
    if (target) {
      result = [
        {
          key: prefix,
          value: target
        }
      ]
    } else {
      return []
    }
  }
  return result
}
