import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatewayVersion } from "./gateway.enums";
import { environment } from "../../../../environments/environment";

export const GATEWAY_VERSION = new InjectionToken<GatewayVersion>('GATEWAY_VERSION');

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: GATEWAY_VERSION,
      useValue: environment.gatewayVersion != null ? environment.gatewayVersion : GatewayVersion.V1_2
    },
  ],
})
export class GatewayModule { }
