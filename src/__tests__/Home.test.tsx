import React from 'react';
import { render } from '@testing-library/react-native';

import Home from '../components/Home';

test('render Home', () => {
  const { getByTestId } = render(<Home />);
  const text = getByTestId('home-message');
  expect(text.props.children).toBe('Falcon Home Screen');
});
