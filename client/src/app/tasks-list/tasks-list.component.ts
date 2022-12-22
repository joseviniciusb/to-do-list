import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from './../models/Task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  @Input() tasks!: Task[];
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  columns!: string[];

  constructor() { }

  ngOnInit(): void {
    this.columns = Object.keys(this.tasks[0]);
  }

  deleteTask(task: Task) {
    this.delete.emit(task);
  }

  editTask(task: Task) {
    this.edit.emit(task);
  }

}
