import { AppOpenTime, INITIALIZE_APP } from '../types';
import configureStore from '../../__mocks__/store';

import * as baseActions from '../actions';

describe('#baseActions', () => {
  describe('#initializeApp', () => {
    it('send expected actions', () => {
      const store = configureStore({});
      const appOpenTime: AppOpenTime = 123456789;

      store.dispatch(baseActions.initializeApp(appOpenTime));
      expect(store.getActions()).toEqual([
        { type: INITIALIZE_APP, appOpenTime },
      ]);
    });
  });
});
