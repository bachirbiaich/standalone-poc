import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OneServiceMock {
  one(): string {
    return 'one standalone';
  }
}
