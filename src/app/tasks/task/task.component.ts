import { Component, Input } from '@angular/core';
import { ITask } from './task.model'

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required : true}) task! : ITask;
}
