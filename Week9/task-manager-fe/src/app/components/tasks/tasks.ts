import { Component, signal } from '@angular/core';
import { Itask } from '../../interfaces/itask';
import { TasksService } from '../../services/tasks-service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  tasks = signal<Itask[]>([]);

  constructor(private service: TasksService){
    this.service.getTasks().subscribe((result) => {
      console.log(result);
      this.tasks.set(result);
    });
  }
}
