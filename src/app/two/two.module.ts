import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoComponent } from './two.component';
import {TwoService} from "./two.service";



@NgModule({
  declarations: [
    TwoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [TwoService],
  exports: [TwoComponent]
})
export class TwoModule { }
