import { PersistedState } from 'redux-persist';
import { BaseState } from './base/types';

export interface ApplicationState {
  base: BaseState;
}

export type PersistedApplicationState = ApplicationState & PersistedState;
