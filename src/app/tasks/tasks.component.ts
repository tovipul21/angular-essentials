import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { USERS_TASK_LIST } from '../dummy-users';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required : true}) userName! : string;

  userTaskList = USERS_TASK_LIST;
  //userTaskListByUser[] = null;
  
  getSelectedUserTaskList(){
    //this.userTaskListByUser = USERS_TASK_LIST.filter(task => task.userId.includes("u1"));
    return USERS_TASK_LIST.filter(task => task.userId.includes("u1"));
  }
}
