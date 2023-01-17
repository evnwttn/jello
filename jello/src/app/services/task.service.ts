import { Injectable } from '@angular/core';
import { Task } from '../types/Task';
import { dummyTasks } from '../dummy/dummyTasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Task[] {
    return dummyTasks;
  }
}
