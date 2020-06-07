import { StackNavigationProp } from '@react-navigation/stack';

export type RootNavigation = {
  Landing: undefined;
  Home: undefined;
};

export type LandingNavigationProp = StackNavigationProp<
  RootNavigation,
  'Landing'
>;

export type LandingProps = {
  navigation: LandingNavigationProp;
};
