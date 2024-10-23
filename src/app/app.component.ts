import { Component , signal } from '@angular/core';
import { DUMMY_USERS } from './dummy_users';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:true,
  imports:[
    HeaderComponent,
    TasksComponent,
    UserComponent
  ]
})
export class AppComponent {
  title = 'Task Manager';

  users = DUMMY_USERS;
  selectedUserId?:string;

  get selectedUser() {
   return  this.users.find((user)=> user.id === this.selectedUserId);
  }

  selectUser(id:string)
  {
    this.selectedUserId = id;
  }

}
