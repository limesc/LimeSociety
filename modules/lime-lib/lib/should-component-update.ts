import lodash from 'lodash'

function customizer (src, dst, key) {
  if (typeof src === 'function' && typeof dst === 'function') {
    return true
  }
  if (typeof src === 'function' || typeof dst === 'function') {
    return false
  }
  if (String(key)[0] === '_') {
    return true
  }
  return undefined
}

export const shouldComponentUpdate = (
  component: any,
  nextProps: any,
  nextState: any
): boolean => {
  return !(
    lodash.isEqualWith(component.props, nextProps, customizer) &&
    component.state === nextState
  )
}
