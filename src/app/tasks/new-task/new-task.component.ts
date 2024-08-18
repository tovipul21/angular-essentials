import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent { 
  @Input({required: true}) userId! : string;
  @Output() close = new EventEmitter<void>();
  //@Output() submit = new EventEmitter<INewTaskData>();

  enteredTitle = '';
  enterdSummary = '';
  enteredDate = '';

  //This is an alternative dependency injection approach as compared to the constructor based approach
  private _tasksService = inject(TasksService);
  
  //This is an alternative constructor based approach to access the injected TaskService service class. 
  // private _tasksService: TasksService;

  // constructor(tasksService: TasksService){
  //   this._tasksService = tasksService;
  // }

  onCancel(){
    this.close.emit();
  }

  onFormSubmit(){
    this._tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enterdSummary,
      dueDate: this.enteredDate
    }, this.userId);

    this.close.emit();

  }
}
