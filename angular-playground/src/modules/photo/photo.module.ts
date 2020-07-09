import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { photoModuleReducers } from './store';
import { PhotoComponent } from './components/photo.component';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('photo', photoModuleReducers)],
  declarations: [PhotoComponent],
  exports: [PhotoComponent],
})
export class PhotoModule {}
