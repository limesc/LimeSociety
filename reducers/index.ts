import { combineReducers } from 'redux'

import viewer, { ViewerState } from './viewer'

export interface RootState {
  viewer: ViewerState
}

const rootReducer = combineReducers({
  viewer
})

export default rootReducer
