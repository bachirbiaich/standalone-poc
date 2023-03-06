import {Inject, Injectable} from '@angular/core';
import { GatewayVersion } from "../../gateway.enums";
import { User } from "../../../auth.interfaces";
import { GatewayUserDto, GatewayUserDto1_2, GatewayUserDto2_0, GatewayUserDto3_0 } from "./user-mapper.interfaces";
import { GATEWAY_VERSION } from "../../gateway.module";

@Injectable({
  providedIn: 'root'
})
export class UserMapperService {
  private mapperByGatewayVersion: Record<GatewayVersion, (userDto: GatewayUserDto) => User> = {
    [GatewayVersion.V1_2]: this.mapV1_2,
    [GatewayVersion.V2_0]: this.mapV2_0,
    [GatewayVersion.V3_0]: this.mapV3_0
  };

  constructor(@Inject(GATEWAY_VERSION) private gatewayVersion: GatewayVersion) {}

  mapByGatewayVersion(userDto: GatewayUserDto): User {
    // TODO: check bind this on sub methods
    // TODO : Get directly gatewayVersion from environments var
    // USE : Use this method with map operator of observable
    return this.mapperByGatewayVersion[this.gatewayVersion](userDto);
  }

  private mapV1_2(userDto: GatewayUserDto1_2): User {
    return new User();
  }

  private mapV2_0(userDto: GatewayUserDto2_0): User {
    return new User();
  }

  private mapV3_0(userDto: GatewayUserDto3_0): User {
    return new User();
  }

}
