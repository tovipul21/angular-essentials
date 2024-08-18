import { Component, Input } from '@angular/core';
import { USERS_TASK_LIST } from '../dummy-users';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { type INewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required:true}) userName! : string;
  @Input({required:true}) userId!:string;
  //@Input() userName : string | undefined;

  private _tasksService: TasksService;

  constructor(tasksService: TasksService){
    this._tasksService = tasksService;
  }

  // This is short cut method of instantiating the TaskService class 
  // constructor(private tasksService: TasksService){
  //   //this._tasksService = tasksService;
  // }

  isAddingTask = false;

  userTaskList = USERS_TASK_LIST;

  get selectedUserTasks(){
    return this._tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id:string){
  //   //this.userTaskListByUser = this.userTaskListByUser.filter((task) => task.id !== id);
  // }

  onStartAddNewTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

  onSubmitAddTask(taskData: INewTaskData){
    this.isAddingTask = false;
  }
}
