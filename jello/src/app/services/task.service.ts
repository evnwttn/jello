import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../types/Task';
import { dummyTasks } from '../dummy/dummyTasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = of(dummyTasks);
    return tasks;
  }
}
