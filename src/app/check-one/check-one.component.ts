import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOneService } from './check-one.service';

@Component({
  selector: 'app-check-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-one.component.html',
  styleUrls: ['./check-one.component.scss']
})
export class CheckOneComponent {
  constructor(public checkOneService: CheckOneService) {}
}
