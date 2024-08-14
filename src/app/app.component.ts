import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, CommonModule, TasksComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?:string;

  get selectedUser(){
    //return this.users.filter(task => task.id.includes("u1"));
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectUser(id: string){
    console.log(id);
    this.selectedUserId = id;
  }
}
