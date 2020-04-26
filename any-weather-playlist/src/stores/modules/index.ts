import { combineReducers } from 'redux';
import base from './base';

const rootReducer = combineReducers({
  base
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;