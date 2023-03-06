export interface GatewayUserDto1_2 {
  name: string;
  lastname: string
}

export interface GatewayUserDto2_0 {
  surname: string;
  lastname: string
}

export interface GatewayUserDto3_0 {
  completeName: string;
  lastname: string
}

export type GatewayUserDto = | GatewayUserDto1_2 | GatewayUserDto2_0 | GatewayUserDto3_0;
