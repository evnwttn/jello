import { Component } from '@angular/core';
import { dummyTasks } from 'src/app/dummy/dummyTasks';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = dummyTasks;
}
