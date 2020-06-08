import { createStore, applyMiddleware, compose, Store } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './reducers';
import { PersistedApplicationState, ApplicationState } from './types';

function configureStore(
  initialState?: PersistedApplicationState,
): Store<ApplicationState> {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['base'],
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(thunk)),
  );

  return store;
}

export default configureStore;
