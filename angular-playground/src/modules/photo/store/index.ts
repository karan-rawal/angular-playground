import { ActionReducerMap } from '@ngrx/store';

import { PhotoState } from './states';
import { photoReducer } from './reducers';

export type PhotoModuleState = {
  photoState: PhotoState;
};

export const photoModuleReducers: ActionReducerMap<PhotoModuleState> = {
  photoState: photoReducer,
};
