import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwoService {
  two(): string {
    return 'two';
  }
}
