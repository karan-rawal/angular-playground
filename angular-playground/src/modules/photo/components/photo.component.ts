import { ActionLoadPhotos } from './../store/actions/photo.action';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {
  photosSelector,
  photosLoadingSelector,
  photosErrorSelector,
} from './../store/selectors/photo.selectors';
import { Photo } from '../model';
import { PhotoModuleState } from '../store';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  photos$: Observable<Array<Photo>>;
  isLoadingPhotos$: Observable<boolean>;
  photosError$: Observable<any>;

  constructor(private store: Store<PhotoModuleState>) {}

  ngOnInit() {
    this.photos$ = this.store.select(photosSelector);
    this.isLoadingPhotos$ = this.store.select(photosLoadingSelector);
    this.photosError$ = this.store.select(photosErrorSelector);
    this.store.dispatch(new ActionLoadPhotos());
  }
}
