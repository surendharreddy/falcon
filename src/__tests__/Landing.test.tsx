import React, { ReactNode } from 'react';
import { AnyAction, Action, createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import { render, RenderResult } from '@testing-library/react-native';

import Landing from '../components/Landing';
import reducers from '../redux/reducers';

const createTestProps = (props: any) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

interface RenderWithRedux<
  S = any,
  A extends Action = AnyAction,
  I extends S = any
> {
  (
    ui: ReactNode,
    reduxOptions: {
      store?: Store<S, A>;
      initialState?: I;
    },
  ): RenderResult & {
    store: Store<S, A>;
  };
}

const renderWithRedux: RenderWithRedux = (
  ui,
  { initialState, store = createStore(reducers, initialState) } = {},
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

test('render Landing with redux', () => {
  const props = createTestProps({});
  const initialState = { base: { appOpenTime: 123456 } };
  const { getByTestId } = renderWithRedux(<Landing {...props} />, {
    initialState,
  });
  expect(getByTestId('app-open-time').props.children).toBe(
    initialState?.base?.appOpenTime,
  );
});
