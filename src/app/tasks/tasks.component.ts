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
  @Input() userName? : string;
  //@Input() userName : string | undefined;

  userTaskList = USERS_TASK_LIST;

  getSelectedUserTaskList(){
    //this.userTaskListByUser = USERS_TASK_LIST.filter(task => task.userId.includes("u1"));
    return USERS_TASK_LIST.filter(task => task.userId.includes("u1"));
  }
}
