import { Component, OnInit } from '@angular/core';

import { Task } from './models/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tasks: Task[] = [
    {
      id: 1,
      description: "Comprar ração para o cachorro",
      date: new Date('2022-11-20 03:10:49.528'),
    }
  ];

  task!: Task;

  ngOnInit(): void {
  }

  edit(task: Task): any {
    this.task = task;
  }

  delete(task: Task): any {
    const updatedTasks = this.tasks.filter((taskSaved) => taskSaved.id !== task.id);
    this.tasks = updatedTasks;
  }

}
