import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import configureStore from '../redux/configureStore';
import { initializeApp } from '../redux/base/actions';

import Routes from './Routes';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistStore(store, {}, () =>
          store.dispatch(initializeApp(Date.now())),
        )}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
