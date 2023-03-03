import { Component } from '@angular/core';
import {OneService} from "./core/services/one.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-standalone-poc';

  constructor(public oneService: OneService) {}
}
