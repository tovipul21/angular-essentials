import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { INewTaskData } from '../new-task/new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
 
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<INewTaskData>();

  enteredTitle = '';
  enterdSummary = '';
  enteredDate = '';

  onCancel(){
    this.cancel.emit();
  }

  onFormSubmit(){
    console.log('Forms submitted from add task form. Now emitting the event to parent.');
    this.submit.emit({
      title: this.enteredTitle,
      summary: this.enterdSummary,
      dueDate: this.enteredDate
    });
  }
}
