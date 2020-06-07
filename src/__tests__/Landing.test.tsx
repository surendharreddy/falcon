/**
 * @format
 */

import 'react-native';
import React from 'react';
import Landing from '../Landing';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const createNavigationProps = (props: any) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

it('renders Landing correctly', () => {
  const props = createNavigationProps({});
  renderer.create(<Landing {...props} />);
});
