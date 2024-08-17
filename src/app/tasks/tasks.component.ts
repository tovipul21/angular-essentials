import { Component, Input } from '@angular/core';
import { USERS_TASK_LIST } from '../dummy-users';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { INewTaskData } from './new-task/new-task.model';

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

  isAddingTask = false;

  userTaskList = USERS_TASK_LIST;

  userTaskListByUser = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    }
  ];

  get selectedUserTasksByUser(){
    var userTasks = this.userTaskListByUser.filter((task) => task.userId === this.userId);
    return userTasks;
    //return USERS_TASK_LIST.filter(task => task.userId.includes("u1"));
  }

  onCompleteTask(id:string){
    this.userTaskListByUser = this.userTaskListByUser.filter((task) => task.id !== id);
  }

  onStartAddNewTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  onSubmitAddTask(taskData: INewTaskData){
    this.userTaskListByUser.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    });

    console.log(this.userTaskList);

    this.isAddingTask = false;
  }
}
