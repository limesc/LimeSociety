import { VIEWER_AUTHENTICATED, VIEWER_LOGOUT } from 'actions/viewer'

export type ViewerState = Readonly<any>

const initialState: ViewerState = null

const viewer = (state: ViewerState = initialState, action) => {
  switch (action.type) {
    case VIEWER_AUTHENTICATED:
      return action.viewer
    case VIEWER_LOGOUT:
      return null

    default:
      return state
  }
}

export default viewer
