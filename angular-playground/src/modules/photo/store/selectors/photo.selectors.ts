import { createSelector } from '@ngrx/store';
import { photoModuleStateSelector } from './photo.module.selector';

export const photoStateSelector = createSelector(
  photoModuleStateSelector,
  (state) => state.photoState
);

export const photosSelector = createSelector(
  photoStateSelector,
  (state) => state.photos
);

export const photosLoadingSelector = createSelector(
  photoStateSelector,
  (state) => state.isLoadingPhotos
);

export const photosErrorSelector = createSelector(
  photoStateSelector,
  (state) => state.photosError
);
