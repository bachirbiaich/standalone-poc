import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OneService {
  one(): string {
    return 'one';
  }
}
