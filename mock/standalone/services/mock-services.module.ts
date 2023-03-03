import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneService } from "src/app/core/services/one.service";
import { OneServiceMock } from "./one.service";
import { CheckOneServiceMock } from "./check-one.service";
import { CheckOneService } from "src/app/check-one/check-one.service";
import { TwoService } from "../../../src/app/two/two.service";
import { TreeService } from "../../../src/app/tree/tree.service";
import { TwoServiceMock } from "./two.service";
import { TreeServiceMock } from "./tree.service";

/**
 *  Note : Be aware that if providers were injected directly in component decorator, they can't be overrided due to DI prority
 **/

@NgModule({
  imports: [CommonModule]
})
export class MockServicesModule {
  static forRoot(): ModuleWithProviders<MockServicesModule> {
    return {
      ngModule: MockServicesModule,
      providers: [
        { provide: OneService, useClass: OneServiceMock },
        { provide: TwoService, useClass: TwoServiceMock },
        { provide: TreeService, useClass: TreeServiceMock },
        { provide: CheckOneService, useClass: CheckOneServiceMock }
      ]
    };
  }
}
