import { INITIALIZE_APP, BaseState, BaseActionTypes } from './types';

const initialState: BaseState = {
  appOpenTime: 0,
};

export function reducer(
  state = initialState,
  action: BaseActionTypes,
): BaseState {
  switch (action.type) {
    case INITIALIZE_APP:
      return {
        ...state,
        appOpenTime: action.appOpenTime,
      };
    default:
      return state;
  }
}

export default reducer;
