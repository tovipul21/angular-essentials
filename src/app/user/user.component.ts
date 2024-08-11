import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { computeMsgId } from '@angular/compiler';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  userList = DUMMY_USERS;

  // get imagePath(){
  //   return "assets/users/" + this.selectedUser().avatar;
  // }

  onSelectUser(){
    console.log('clicked !!');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
