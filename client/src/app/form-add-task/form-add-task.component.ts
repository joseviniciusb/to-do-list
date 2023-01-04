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

  formAddTask: FormGroup;
  edited: boolean = false;
  taskEdited?: Task;

  constructor() {
    this.formAddTask = new FormGroup({
      description: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  get task() {
    return this.formAddTask.controls;
  }

  @Input()
  set taskItem(task: Task) {
    if (task) {
      this.taskEdited = task;
      this.edited = true;

      this.formAddTask = new FormGroup({
        description: new FormControl( task ? task.description : '', [Validators.required]),
      });
    }
  }

  submit() {
    if (this.formAddTask.invalid) return;

    if (this.edited) {
      const indexTask = this.tasks.findIndex((task) => task.id === this.taskEdited?.id);
      this.tasks[indexTask].description = this.formAddTask.get('description')?.value;
    } else {
      const newTask: Task = { id: Math.floor(Math.random() * 100), description: this.formAddTask.get('description')?.value, date: new Date() };
      this.tasks.push(newTask);
    }

    this.edited = false;
    this.formAddTask.reset();
  }

}
