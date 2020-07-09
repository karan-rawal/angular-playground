import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { PhotoModule } from '../photo/photo.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PhotoModule, StoreModule.forRoot({})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
