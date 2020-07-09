import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  ACTION_TYPE_LOAD_PHOTOS,
  ActionLoadPhotosSuccess,
  ActionLoadPhotosFailure,
} from './../actions/photo.action';
import { PhotoService } from './../../services';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

@Injectable({
  providedIn: 'root',
})
export class PhotoEffects {
  constructor(private actions$: Actions, private photoService: PhotoService) {}

  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTION_TYPE_LOAD_PHOTOS),
      switchMap(() => {
        return this.photoService.getPhotos().pipe(
          map((photos) => new ActionLoadPhotosSuccess(photos)),
          catchError((e) => of(new ActionLoadPhotosFailure(e)))
        );
      })
    )
  );
}
