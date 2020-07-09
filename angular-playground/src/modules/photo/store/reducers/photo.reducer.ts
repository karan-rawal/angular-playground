import { initialPhotoState } from '../states';

import {
  PhotoActions,
  ACTION_TYPE_LOAD_PHOTOS,
  ACTION_TYPE_LOAD_PHOTOS_SUCCESS,
  ACTION_TYPE_LOAD_PHOTOS_FAILURE,
  ActionLoadPhotosSuccess,
  ActionLoadPhotosFailure,
} from '../actions';

export function photoReducer(state = initialPhotoState, action: PhotoActions) {
  switch (action.type) {
    case ACTION_TYPE_LOAD_PHOTOS: {
      const tempState = { ...state };
      tempState.isLoadingPhotos = true;
      tempState.photos = [];
      tempState.photosError = null;
      return tempState;
    }
    case ACTION_TYPE_LOAD_PHOTOS_SUCCESS: {
      const tempState = { ...state };
      tempState.isLoadingPhotos = false;
      tempState.photos = (action as ActionLoadPhotosSuccess).payload;
      tempState.photosError = null;
      return tempState;
    }
    case ACTION_TYPE_LOAD_PHOTOS_FAILURE: {
      const tempState = { ...state };
      tempState.isLoadingPhotos = false;
      tempState.photos = [];
      tempState.photosError = (action as ActionLoadPhotosFailure).payload;
      return tempState;
    }
    default: {
      return state;
    }
  }
}
