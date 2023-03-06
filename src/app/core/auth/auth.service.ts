import { Injectable } from '@angular/core';
import { UserMapperService } from "./gateway/mappers/user/user-mapper.service";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { User } from "./auth.interfaces";
import { GatewayUserDto } from "./gateway/mappers/user/user-mapper.interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private userMapper: UserMapperService) {}

  loadUser(): Observable<User> {
    return this.http.get<GatewayUserDto>('url').pipe(map(this.userMapper.mapByGatewayVersion));
  }
}
