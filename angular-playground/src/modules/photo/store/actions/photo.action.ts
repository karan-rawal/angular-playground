import { Action } from '@ngrx/store';
import { Photo } from '../../model';

export const ACTION_TYPE_LOAD_PHOTOS = '[photo] Load photos';
export const ACTION_TYPE_LOAD_PHOTOS_SUCCESS = '[photo] Load photos success';
export const ACTION_TYPE_LOAD_PHOTOS_FAILURE = '[photo] Load photos failure';

export class ActionLoadPhotos implements Action {
  readonly type = ACTION_TYPE_LOAD_PHOTOS;
}

export class ActionLoadPhotosSuccess implements Action {
  readonly type = ACTION_TYPE_LOAD_PHOTOS_SUCCESS;
  constructor(public payload: Array<Photo>) {}
}

export class ActionLoadPhotosFailure implements Action {
  readonly type = ACTION_TYPE_LOAD_PHOTOS_FAILURE;
  constructor(public payload: any) {}
}

export type PhotoActions =
  | ActionLoadPhotos
  | ActionLoadPhotosSuccess
  | ActionLoadPhotosFailure;
