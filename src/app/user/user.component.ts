import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
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
  @Output() select = new EventEmitter();

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
