import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneService } from "../../../src/app/core/services/one.service";
import { OneServiceMock } from "./one.service";

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: OneService, useClass: OneServiceMock }
  ]
})
export class MockServicesModule { }
