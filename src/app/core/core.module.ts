import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstViewComponent } from './components/first-view/first-view.component';
import { SecondViewComponent } from './components/second-view/second-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FirstViewComponent, SecondViewComponent],
  exports: [FirstViewComponent, SecondViewComponent]
})
export class CoreModule { }
