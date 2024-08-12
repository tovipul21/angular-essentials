import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // This is an decorator (non Signal) approach
  @Input({required : true}) id! : string;
  @Input({required : true}) avatar! : string;
  @Input({required : true}) name! : string;
  // Declare event to be used when a user clicks on the user box 
  @Output() select = new EventEmitter<string>();
  //select = output<string>(); // This event is on is Signal based approach

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  // This is a Signal based approach which is also an alternative way of using other then decorator approch
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //     return 'assets/users/' + this.avatar()
  // });

  get fullName(){
    return this.name;
  }

  onSelectUser(){
    this.select.emit(this.id);
  }
}
