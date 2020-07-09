import { Photo } from '../../model';

export interface PhotoState {
  isLoadingPhotos: boolean;
  photos: Array<Photo>;
  photosError: any;
}

export const initialPhotoState: PhotoState = {
  isLoadingPhotos: false,
  photos: [],
  photosError: null,
};
