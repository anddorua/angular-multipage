import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForAudioComponent } from './components/for-audio/for-audio.component';
import { CoreModule, StateService } from '../core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule,
  ],
  providers: [StateService],
  declarations: [ForAudioComponent],
  exports: [ForAudioComponent],
  bootstrap: [ForAudioComponent]
})
export class FirstFeatureModule { }
