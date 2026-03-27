import { Component, Input } from '@angular/core';
import { Itask } from '../../interfaces/itask';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input() task!: Itask;
}
