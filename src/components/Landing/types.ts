import { StackNavigationProp } from '@react-navigation/stack';
import { RootNavigation } from '../types';
import { BaseState } from './../../redux/base/types';

export type LandingNavigationProp = StackNavigationProp<
  RootNavigation,
  'Landing'
>;

export type LandingProps = {
  base: BaseState;
  navigation: LandingNavigationProp;
};
