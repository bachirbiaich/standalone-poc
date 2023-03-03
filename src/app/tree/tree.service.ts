import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  tree(): string {
    return 'tree';
  }
}
