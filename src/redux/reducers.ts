import { combineReducers, Reducer } from 'redux';
import { ApplicationState } from './types';

import baseReducer from './base/reducer';

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  base: baseReducer,
});

export default reducers;
