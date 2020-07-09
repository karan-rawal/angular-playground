import { createFeatureSelector } from '@ngrx/store';

import { PhotoModuleState } from '../index';

export const photoModuleStateSelector = createFeatureSelector<PhotoModuleState>(
  'photo'
);
