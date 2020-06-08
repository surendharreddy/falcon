import { BaseActionTypes, INITIALIZE_APP, AppOpenTime } from './types';

export function initializeApp(appOpenTime: AppOpenTime): BaseActionTypes {
  return {
    type: INITIALIZE_APP,
    appOpenTime,
  };
}
