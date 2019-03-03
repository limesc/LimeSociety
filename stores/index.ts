import { action, observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'

const isServer = !process.browser
useStaticRendering(isServer)

export class Store {
  @observable viewer: any = null

  constructor (isServer: boolean, initialData: any = {}) {
    this.viewer = initialData.viewer
  }

  @action login = (viewer: any) => {
    this.viewer = viewer
  }

  @action logout = () => {
    this.viewer = null
  }
}

let store = null
export function initializeStore (initialData: any = {}) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData)
  }
  if (store === null) {
    store = new Store(isServer, initialData)
  }
  return store
}
