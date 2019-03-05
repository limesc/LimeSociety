import * as controller from 'lib/controller'

const url = 'api/profile'

async function login (data: any, options?: controller.ControllerOptions) {
  return controller.any('post', 'api/login', data, options)
}

async function logout (options?: controller.ControllerOptions) {
  return controller.boolean('post', 'api/logout', {}, options)
}

async function retrieve (options?: controller.ControllerOptions) {
  return controller.any('get', url, {}, options)
}

async function update (data: any, options?: controller.ControllerOptions) {
  return controller.any('put', url, data, options)
}

export default {
  login,
  logout,
  retrieve,
  update
}
