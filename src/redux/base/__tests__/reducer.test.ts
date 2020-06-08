import { AppOpenTime, BaseState } from '../types';
import * as baseActions from '../actions';
import baseReducer from '../reducer';

describe('#baseReducer', () => {
  let initialState: BaseState;

  beforeEach(() => {
    initialState = {
      appOpenTime: 0,
    };
  });

  it('#initializeApp', () => {
    const appOpenTime: AppOpenTime = 123456789;
    const expected = {
      appOpenTime: appOpenTime,
    };

    expect(
      baseReducer(initialState, baseActions.initializeApp(appOpenTime)),
    ).toEqual(expected);
  });
});
