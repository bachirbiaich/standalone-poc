import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckComponent } from './check/check.component';
import {CheckOneComponent} from "./check-one/check-one.component";
import {CheckOneService} from "./check-one/check-one.service";
import {TwoModule} from "./two/two.module";
import {TreeComponent} from "./tree/tree.component";

@NgModule({
  declarations: [
    AppComponent,
    CheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckOneComponent,
    TwoModule,
    TreeComponent
  ],
  providers: [CheckOneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
