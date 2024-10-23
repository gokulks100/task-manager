import { Component, computed, Input, signal,input, Output,output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';
import { type User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id : string,
//   name : string,
//   avatar : string
// }
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  standalone:true,
  imports:[

  ]
})
export class UserComponent {

  // @Input({required:true}) id = ''
  // @Input({required:true}) avatar = ''
  // @Input({required:true}) name = ''

  @Input({required:true}) user!: User;
  @Input() selected!:boolean;

  @Output() select = new EventEmitter()

  // select = output<string>();
   // @Input() avatar1! :String;

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  //signal
  // avatar = input.required<string>()
  // name = input.required<string>()
  // imagePath = computed(() => 'users/' + this.avatar());

  // users = DUMMY_USERS;

  // selectedUser = signal(DUMMY_USERS[randomIndex]);



  onSelectUser() {

    this.select.emit(this.user.id);



    // const rando = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[rando]);
  }
}
