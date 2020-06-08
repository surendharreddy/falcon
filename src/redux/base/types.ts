export type AppOpenTime = Number;

export interface BaseState {
  appOpenTime?: AppOpenTime;
}

export const INITIALIZE_APP = 'INITIALIZE_APP';

interface InitializeAppAction {
  type: typeof INITIALIZE_APP;
  appOpenTime: AppOpenTime;
}

export type BaseActionTypes = InitializeAppAction;
