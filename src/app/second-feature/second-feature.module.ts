import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForVideoComponent } from './components/for-video/for-video.component';
import { CoreModule, StateService } from '../core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule,
  ],
  providers: [StateService],
  declarations: [ForVideoComponent],
  exports: [ForVideoComponent],
  bootstrap: [ForVideoComponent],
})
export class SecondFeatureModule { }
