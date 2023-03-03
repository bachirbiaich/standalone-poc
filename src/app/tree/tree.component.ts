import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TreeService} from "./tree.service";

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  constructor(public treeService: TreeService) { }
}
