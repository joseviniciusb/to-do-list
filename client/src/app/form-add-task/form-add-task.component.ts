import { Task } from './../models/Task';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-task',
  templateUrl: './form-add-task.component.html',
  styleUrls: ['./form-add-task.component.css']
})
export class FormAddTaskComponent implements OnInit {

  @Input() tasks!: Task[];

  formAddTask: FormGroup = new FormGroup({
    task: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  get task() {
    return this.formAddTask.get('task')!;
  }

  submit() {
    if (this.formAddTask.invalid) return;
    const newTask: Task = { id: 1, description: this.task.value, date: new Date() };
    this.tasks.push(newTask);
    console.table(this.tasks);
  }

}
