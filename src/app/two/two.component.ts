import { Component } from '@angular/core';
import {TwoService} from "./two.service";

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent {
  constructor(public twoService: TwoService) { }
}
