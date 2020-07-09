import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PhotoService } from './services';
import { PhotoEffects } from './store/effects';
import { photoModuleReducers } from './store';
import { PhotoComponent } from './components/photo.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([PhotoEffects]),
    StoreModule.forFeature('photo', photoModuleReducers),
  ],
  declarations: [PhotoComponent],
  exports: [PhotoComponent],
  providers: [PhotoService],
})
export class PhotoModule {}
